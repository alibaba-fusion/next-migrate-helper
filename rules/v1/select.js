const helper = require('../../lib/helpers/index');

module.exports = [
  helper.replaceProp('Select', 'container', 'popupContainer'),
  helper.replaceProp('Select', 'multiple', 'mode=multiple'),
  helper.replaceProp('Select', 'filterBy', 'filter'),
  helper.replaceProp('Select', 'shape=arrow-only', 'hasBorder'),
  helper.replaceProp('Select.Combobox', 'shape=arrow-only', 'hasBorder'),
  helper.replaceProp('Select.Combobox', 'multiple', 'mode=multiple'),
  helper.replaceProp('Select.Combobox', 'tags', 'mode=tag'),
  helper.replaceProp('Select.Combobox', 'container', 'popupContainer'),
  helper.replaceProp('Select.Combobox', 'filterBy', 'filter'),
  helper.replaceProp('Select.Combobox', 'onInputUpdate', 'onChange'),
  helper.replaceProp('Select.Combobox', 'onInputFocus', 'onFocus'),
  helper.replaceProp('Select.Combobox', 'onInputBlur', 'onBlur'),
  helper.replaceProp('Select.Combobox', 'onInputEnter', 'onPressEnter'),

  helper.replaceComponentCondition('Select.Combobox', 'mode=multiple', 'Select', {
    reason: '使用 `Select` 代替 `Select.Combobox`, 请添加 showSearch 打开搜索功能。'
  }),
  helper.replaceComponentCondition('Select.Combobox', 'mode=tag', 'Select'),
  helper.replaceComponentCondition('Select.Combobox', 'mode=single', 'Select.AutoComplete'),
  
];
