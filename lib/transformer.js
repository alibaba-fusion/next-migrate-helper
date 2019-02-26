const path = require('path');
const glob = require('glob');
const { logger } = require('./utils');

let rulesFiles = [];

function getRuleFiles(target) {
  if (rulesFiles.length) {
    return rulesFiles;
  }
  const rulesFolderPath = path.resolve(__dirname, '../rules/', target);
  const filesdir = glob.sync(`${rulesFolderPath}/*/index.js`);
  const fileslonely = glob.sync(`${rulesFolderPath}/*.js`);
  rulesFiles = filesdir.concat(fileslonely);

  return rulesFiles;
}
module.exports = function transformer(fileInfo, api, option) {
  const {path: filePath, source} = fileInfo;
  const j = api.jscodeshift;
  const {target} = option;
  const rules = getRuleFiles(target);

  const ast = j(source);

  rules.forEach(file => {
    const rules = require(file);
    rules.forEach(rule => {
      try {
        rule(ast, filePath, j);
      } catch (e) {
        logger.error(`Run rules of ${path.basename(file)} failed in ${filePath}: ${e.stack}`);
      }
    });
  });

  return ast.toSource();
};
