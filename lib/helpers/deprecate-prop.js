const { warn } = require('../utils');
const find = require('./find');

module.exports = function deprecateProp(componentName, name, warnInfo) {
  return (ast, filePath, j) => {
    find(componentName, name, ast, j, {
      prop: (path, attribute) => {
        warn(filePath, attribute.loc.start.line, Object.assign({
          reason: `\`${componentName}[${name}]\` 已被废弃`
        }, warnInfo));
      }
    });
  };
};
