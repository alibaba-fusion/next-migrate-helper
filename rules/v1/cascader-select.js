const helper = require('../../lib/helpers/index');

module.exports = [
  helper.replaceProp('CascaderSelect', 'container', 'popupContainer'),
  helper.deprecateProp('CascaderSelect', 'shape', {
    reason: '`CascaderSelect[shape]` 已被废弃，请使用 hasBorder 代替'
  }),
  helper.deprecateProp('CascaderSelect', 'showItemCount', {
    reason: '`CascaderSelect[showItemCount]` 已被废弃，请使用 listClassName/listStyle 来设置每列样式'
  }),
  helper.deprecateProp('CascaderSelect', 'labelWidth', {
    reason: '`CascaderSelect[labelWidth]` 已被废弃，请使用 listClassName/listStyle 来设置每列样式'
  }),
  helper.replaceProp('CascaderSelect', 'expandTrigger', 'expandTriggerType')
];
