const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateProp('Menu', 'onDeselect', {
    reason: '`Menu[onDeselect]` 已被废弃，请使用 `onSelect(selectedKeys, item, extra)` 中的 `extra.selected` 属性为 false 判断'
  }),
  helper.deprecateProp('Menu', 'multipleCol'),
  helper.deprecateProp('Menu', 'autoFocusFirstItem'),
  helper.deprecateProp('Menu.Item', 'hasSelectedIcon', {
    reason: '`Menu.Item[hasSelectedIcon]` 已被废弃，请使用 Menu[hasSelectedIcon] 代替'
  }),
  helper.deprecateProp('Menu.SubMenu', 'triggerType', {
    reason: '`Menu.SubMenu[triggerType]` 已被废弃，请使用 Menu[triggerType] 代替'
  }),
  helper.deprecateProp('Menu.SubMenu', 'align', {
    reason: '`Menu.SubMenu[align]` 已被废弃，请使用 Menu[popupAlign] 代替'
  }),
  helper.deprecateProp('Menu.PopupItem', 'autoWidth', {
    reason: '`Menu.PopupItem[autoWidth]` 已被废弃，请使用 Menu[popupAutoWidth] 代替'
  })
];
