const helper = require('../../lib/helpers/index');

module.exports = [
  helper.replaceProp('Input', 'addonBefore', 'addonTextBefore'),
  helper.replaceProp('Input', 'addonAfter', 'addonTextAfter'),
  helper.replaceComponentCondition('Input', 'multiple', 'Input.TextArea'),
  helper.removeProp('Input.TextArea', 'multiple'),
];
