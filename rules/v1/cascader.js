const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateProp('Cascader', 'showItemCount', {
    reason: '`Cascader[showItemCount]` 已被废弃，请使用 listClassName/listStyle 来设置每列样式'
  }),
  helper.deprecateProp('Cascader', 'labelWidth', {
    reason: '`Cascader[labelWidth]` 已被废弃，请使用 listClassName/listStyle 来设置每列样式'
  }),
  helper.replaceProp('Cascader', 'expandTrigger', 'expandTriggerType')
];
