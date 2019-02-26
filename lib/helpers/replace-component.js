const debug = require('debug')('next-migrate:replace-component');
const { warn } = require('../utils');
const find = require('./find');

function exists(ast, type, callback) {
  const values = [];

  ast.find(type, value => {
    if (callback(value)) {
      values.push(value);
    }
  });

  return values.length > 0;
}

module.exports = function replaceComponent(oldName, newName, warnInfo) {
  return (ast, filePath, j) => {
    const namesMap = {};
    const removedPath = [];

    const [oldMainName, oldSubName] = oldName.split('.');
    const [newManinName, newSubName] = newName.split('.');
    let oldLocalMainName;

    find(oldName, null, ast, j, {
      main: (path, localMainName, specifier, specifiers, oldMainIndex) => {
        oldLocalMainName = localMainName;
        if (oldMainName !== newManinName) {
          if (oldSubName) {
            const findSpecifyMemberExpression = value => {
              return value.object.name === oldLocalMainName && value.property.name === oldSubName;
            };
            const findSpecifyVariableDeclaration = value => {
              return value.declarations.find(declaration => {
                const { id, init } = declaration;
                return init && init.name === oldLocalMainName && id.properties.find(property => property.key.name === oldSubName);
              });
            };
            if (exists(ast, j.MemberExpression, findSpecifyMemberExpression) ||
                exists(ast, j.VariableDeclaration, findSpecifyVariableDeclaration)) {

              // import { Button } from '@alife/next'; => import { Button, SplitButton } from '@alife/next';
              if (specifiers.every(specifier => specifier.local.name !== newManinName)) {
                specifiers.push(j.importSpecifier(j.identifier(newManinName)));
              }
            }
          } else {
            // import { Accordion } from '@alife/next'; => import { Collapse } from '@alife/next';
            const index = specifiers.findIndex(specifier => specifier.local && specifier.local.name === newManinName);
            if (index === -1) {
              specifier.local.name = newManinName;
              if (specifier.local.name === oldMainName) {
                specifier.local.name = newManinName;
              }
            } else {
              path.get('specifiers', oldMainIndex).replace();
            }

            if (oldMainName === oldLocalMainName) {
              // <Accordion /> => <Collapse />
              namesMap[oldMainName] = newManinName;
            }
          }
          debug('oldMainName: %s, oldMainName: %s, path %O', oldMainName, newManinName, path.value.source);
        }
      },
      sub: (path, oldLocalSubName, declaration, dIndex, declarations, property, pIndex, properties) => {
        const { id, init } = declaration;
        if (id.type === 'Identifier' && init && init.type === 'MemberExpression') {
          if (newSubName) {
            // const TabPane = Tab.TabPane; => const TabPane = Tab.Item;
            init.property.name = newSubName;
          } else {
            // const Combobox = Select.Combobox; => removed
            // const Split = Button.Split; => removed
            if (declarations.length === 1) {
              removedPath.push(path);
            } else {
              declarations.splice(dIndex, 1);
            }

            // <Combobox /> => <Select />
            // <Split /> => <SplitButton />
            namesMap[oldLocalSubName] = oldMainName === newManinName ? oldLocalMainName : newManinName;
          }
        } else {
          if (newSubName) {
            // const { TabPane } = Tab; => const { Item } = Tab;
            property.key.name = newSubName;

            if (oldSubName !== property.value.name) {
              namesMap[oldLocalSubName] = newSubName;
            }
          } else {
            // const { Combobox } = Select; => removed
            // const { Split } = Button; => removed
            if (properties.length === 1) {
              if (declarations.length === 1) {
                removedPath.push(path);
              } else {
                declarations.splice(dIndex, 1);
              }
            } else {
              properties.splice(pIndex, 1);
            }

            // <Combobox /> => <Select />
            // <Split /> => <SplitButton />
            namesMap[oldLocalSubName] = oldMainName === newManinName ? oldLocalMainName : newManinName;
          }
        }
      },
      element: (path, isOpen, element) => {
        const elementHeloer = isOpen ? path.get('openingElement') : path.get('closingElement');
        const { name } = element;

        // 成员表达式
        if (name.type === 'JSXMemberExpression') {
          if (newSubName) {
            // <Tab.TabPane /> => <Tab.Item />
            elementHeloer.get('name').get('property').get('name').replace(newSubName);
          } else {
            // <Select.Combobox /> => <Select />
            // <Button.Split /> => <SplitButton />
            elementHeloer.get('name').replace(newManinName);
          }
        } else if (Object.keys(namesMap).indexOf(name.name) > -1) {
          elementHeloer.get('name').replace(namesMap[name.name]);

        } else {
          elementHeloer.get('name').replace(newName);
        }
        reportWarning(filePath, path.value, oldName, newName, warnInfo);
      }
    });
    removedPath.forEach(path => path.prune());
  };
};

function reportWarning(filePath, value, oldName, newName, warnInfo) {
  warn(filePath, value.loc.start.line, Object.assign({
    success: `使用 \`${newName}\` 代替 \`${oldName}\``
  }, warnInfo));
}
