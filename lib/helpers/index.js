const deprecateComponent = require('./deprecate-component');
const deprecateProp = require('./deprecate-prop');
const replaceComponent = require('./replace-component');
const replaceComponentCondition = require('./replace-component-condition');
const replaceProp = require('./replace-prop');
const removeProp = require('./remove-prop');
const find = require('./find');

module.exports = {
  deprecateComponent,
  deprecateProp,
  replaceComponent,
  replaceComponentCondition,
  replaceProp,
  removeProp,
  find
};
