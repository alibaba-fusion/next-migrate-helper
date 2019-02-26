const helper = require('../../lib/helpers/index');

module.exports = [
  helper.replaceProp('TreeSelect', 'container', 'popupContainer'),
  helper.deprecateProp('TreeSelect', 'shape', {
    reason: '`TreeSelect[shape]` 已被废弃，请使用 hasBorder 代替'
  }),
  helper.replaceProp('TreeSelect.Node', 'disableCheckbox', 'checkboxDisabled'),
];
