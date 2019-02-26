const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateProp('Nav', 'onDeselect', {
    reason: '`Nav[onDeselect]` 已被废弃，请使用 `onSelect(selectedKeys, item, extra)` 中的 `extra.selected` 属性为 false 判断'
  }),
  helper.deprecateProp('Nav', 'multipleCol'),
  helper.deprecateProp('Nav.Item', 'hasSelectedIcon', {
    reason: '`Nav.Item[hasSelectedIcon]` 已被废弃，请使用 Nav[hasSelectedIcon] 代替'
  }),
  helper.deprecateProp('Nav.SubNav', 'triggerType', {
    reason: '`Nav.SubNav[triggerType]` 已被废弃，请使用 Nav[triggerType] 代替'
  }),
  helper.deprecateProp('Nav.SubNav', 'align', {
    reason: '`Nav.SubNav[align]` 已被废弃，请使用 Nav[popupAlign] 代替'
  }),
  helper.deprecateProp('Nav.PopupItem', 'autoWidth', {
    reason: '`Nav.PopupItem[autoWidth]` 已被废弃，请使用 Nav[popupAutoWidth] 代替'
  })
];
