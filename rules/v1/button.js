const helper = require('../../lib/helpers/index');

module.exports = [
  helper.replaceProp('Button', 'shape=ghost', 'ghost=true'),
  helper.replaceProp('Button', 'shape=warning', 'warning=true'),
  helper.replaceProp('Button', 'shape=text', 'text=true'),
  helper.deprecateProp('Button', 'shape', {
    reason: 'Button[shape] 已被废弃，请使用单独的 ghost, warning, text 等属性替代'
  }),
  helper.deprecateProp('Button', 'component=span', {
    reason: 'Button[component] 不再支持取值为 span, div，请使用值 button, a 代替'
  }),
  helper.deprecateProp('Button', 'component=div', {
    reason: 'Button[component] 不再支持取值为 span, div，请使用值 button, a 代替'
  }),
  helper.deprecateProp('Button', 'type=light', {
    reason: 'Button[type] 不再支持取值为 light,使用 ghost="light" 替代',
  }),
  helper.deprecateProp('Button', 'type=dark，使用', {
    reason: 'Button[type] 不再支持取值为 dark, 使用 ghost="dark" 替代',
  }),
  helper.replaceComponent('Button.Split', 'SplitButton'),
];
