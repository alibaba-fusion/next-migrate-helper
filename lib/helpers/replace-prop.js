const { warn } = require('../utils');
const find = require('./find');

module.exports = function replaceProp(componentName, oldName, newName, warnInfo) {
  // eslint-disable-next-line
  const [oldPropName, oldPropValue] = oldName.split('=');
  const [newPropName, newPropValue] = newName.split('=');

  return (ast, filePath, j) => {
    find(componentName, oldName, ast, j, {
      prop: (path, attribute, index) => {
        const attrHelper = path.get('openingElement').get('attributes', index);
        if (oldPropName !== newPropName) {
          attrHelper.get('name').get('name').replace(newPropName);
        }
        if (newPropValue) {
          if (newPropValue === 'true') {
            attrHelper.get('value').replace(null);
          } else {
            attrHelper.get('value').replace(j.literal(newPropValue));
          }
        }

        warn(filePath, path.value.loc.start.line, Object.assign({
          success: `使用 \`${componentName}[${newName}]\` 代替 \`${componentName}[${oldName}]\``
        }, warnInfo));
      }
    });
  };
};
