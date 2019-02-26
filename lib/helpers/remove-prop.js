const { warn } = require('../utils');
const find = require('./find');

module.exports = function removeProp(componentName, propName, warnInfo) {
  // eslint-disable-next-line
  const [name, value] = propName.split('=');

  return (ast, filePath, j) => {
    find(componentName, propName, ast, j, {
      prop: (path, attribute, index) => {
        path.get('openingElement').get('attributes', index).replace();

        warn(filePath, attribute.loc.start.line, Object.assign({
          success: `\`${componentName}[${propName}]\` 已被废弃`
        }, warnInfo));
      }
    });
  };
};
