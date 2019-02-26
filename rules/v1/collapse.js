const helper = require('../../lib/helpers/index');

module.exports = [
  helper.replaceComponent('Accordion', 'Collapse'),
  helper.replaceProp('Collapse', 'single', 'accordion', {
    reason: '使用 `Collapse[accordion]` 代替 `Accordion[single]`'
  }),
  helper.removeProp('Collapse', 'singleShrink'),
  helper.replaceProp('Collapse', 'onChange', 'onExpand', {
    reason: '`Collapse` 受控请使用 expandedKeys/onExpand'
  }),
  helper.deprecateProp('Collapse.Panel', 'expanded', {
    reason: '`Accordion.Panel[expanded]` 已被废弃，受控请使用 expandedKeys/onExpand'
  }),
  helper.removeProp('Collapse.Panel', 'multiTitle', {
    reason: '`Accordion.Panel[multiTitle]` 已被废弃，默认可以处理 title 为多行文字的情况'
  })
];
