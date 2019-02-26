const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateProp('Tag', 'count'),
  helper.deprecateProp('Tag', 'marked'),
  helper.deprecateProp('Tag', 'value'),
  helper.deprecateProp('Tag', 'type=secondary', {
    reason: 'Tag[type] 属性已改变, 废弃\'secondary\',保留\'primary|normal\'',
  }),
  helper.replaceProp('Tag', 'selected', 'checked'),
  helper.replaceProp('Tag', 'defaultSelected', 'defaultChecked'),
  helper.replaceProp('Tag', 'onSelect', 'onChange'),
  helper.removeProp('Tag', 'closed'),

  helper.replaceComponentCondition('Tag', 'shape=selectable', 'Tag.Selectable'),
  helper.removeProp('Tag.Selectable', 'shape=selectable'),

  helper.replaceComponentCondition('Tag', 'shape=deletable', 'Tag.Closable'),
  helper.removeProp('Tag.Closable', 'shape=deletable'),

];
