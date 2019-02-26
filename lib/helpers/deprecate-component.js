const { warn } = require('../utils');
const find = require('./find');

module.exports = function deprecateComponent(name, warnInfo) {
  return (ast, filePath, j) => {
    find(name, null, ast, j, {
      element: path => {
        warn(filePath, path.value.loc.start.line, Object.assign({
          reason: `\`${name}\` 已被废弃`
        }, warnInfo));
      }
    });
  };
};
