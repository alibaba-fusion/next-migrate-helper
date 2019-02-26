const debug = require('debug')('next-migrate:find');
// const packageNames = ['@alife/next'];

module.exports = function(name, propName, ast, j, hooks) {
  const [mainName, subName] = name.split('.');
  let foundMainName = false;
  let localMainName;
  const names = [];

  ast.find(j.ImportDeclaration).replaceWith(path => {
    const { value } = path;
    const isNext = /^@alife\/next/.test(value.source.value)
      || /^@alifd\/next/.test(value.source.value);

    if (isNext) {
      debug('ImportDeclaration: %s %s', value.source.value, isNext);
      const { specifiers } = value;
      for (let i = 0; i < specifiers.length; i++) {
        const specifier = specifiers[i];
        // debug('Specifier: %O', specifier);
        // import
        if (specifier.local && specifier.local.name === mainName) {
          foundMainName = true;
          localMainName = specifier.local.name;
          if (!subName) {
            names.push(localMainName);
          }

          hooks.main && hooks.main(path, localMainName, specifier, specifiers, i);
          break;
        }
      }
    }

    return path.value;
  });

  if (foundMainName && subName) {
    ast.find(j.VariableDeclaration).replaceWith(path => {
      const { value } = path;

      value.declarations.forEach((declaration, i) => {
        const { id, init } = declaration;
        if (id.type === 'Identifier' && init && init.type === 'MemberExpression') {
          const { property, object } = init;
          if (property.type === 'Identifier' && object.name === localMainName && property.name === subName) {
            names.push(id.name);

            hooks.sub && hooks.sub(path, id.name, declaration, i, value.declarations);
          }
        } else if (id.type === 'ObjectPattern' && init && init.type === 'Identifier' && init.name === localMainName) {
          const { properties } = id;
          const index = properties.findIndex(property => {
            return property.key.name === subName;
          });
          if (index > -1) {
            const property = properties[index];
            names.push(property.value.name);

            hooks.sub && hooks.sub(path, property.value.name, declaration, i, value.declarations, property, index, properties);
          }
        }
      });

      return path.value;
    });
  }

  if (foundMainName) {
    ast.find(j.JSXElement).replaceWith(path => {
      const { value } = path;
      const handleElement = (element, isOpen) => {
        const { name } = element;
        if ((typeof name === 'string' && names.indexOf(name) > -1) ||
            (name.type === 'JSXIdentifier' && names.indexOf(name.name) > -1) ||
            (subName && name.type === 'JSXMemberExpression' && name.object.name === localMainName && name.property.name === subName)) {
          hooks.element && hooks.element(path, isOpen, element);

          if (isOpen && propName) {
            const attributes = element.attributes;
            const index = attributes.findIndex(attribute => {
              const [name, value] = propName.split('=');
              if (attribute.name && attribute.name.name && attribute.name.name === name) {
                if (value) {
                  return attribute.value.value === value;
                }
                return true;
              }
              return false;
            });
            if (index > -1) {
              hooks && hooks.prop(path, attributes[index], index, attributes);
            }
          }
        }
      };

      if (value.openingElement) {
        handleElement(value.openingElement, true);
      }
      if (value.closingElement) {
        handleElement(value.closingElement, false);
      }

      return path.value;
    });
  }
};
