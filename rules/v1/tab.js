const helper = require('../../lib/helpers/index');

module.exports = [
  helper.removeProp('Tab', 'type=bar'),
  helper.replaceProp('Tab', 'type', 'shape'),
  helper.replaceProp('Tab', 'resDirection', 'excessMode'),
  helper.replaceProp('Tab', 'tabBarExtraContent', 'extra'),
  helper.replaceProp('Tab', 'destroyInactiveTabPane', 'unmountInactiveTabs'),

  helper.deprecateProp('Tab', 'resDirection', {
    reason: 'Tab[resDirection] 已被废弃，请使用 excessMode="slide|dropdown" 替换',
  }),
  helper.deprecateProp('Tab', 'closeable', {
    reason: 'Tab[disabled] 已被废弃，直接在需要可关闭的 Tab.Item 里使用 closeable 即可',
  }),

  helper.replaceProp('Tab.TabPane', 'tab', 'title'),
  helper.replaceComponent('Tab.TabPane', 'Tab.Item'),
];
