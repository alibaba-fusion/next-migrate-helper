const helper = require('../../lib/helpers/index');

module.exports = [
  helper.replaceProp('Calendar', 'type', 'shape'),
  helper.replaceProp('Calendar', 'onChange', 'onSelect'),
  helper.replaceProp('Calendar', 'disabledMonth', 'disabledDate'),
  helper.replaceProp('Calendar', 'disabledYear', 'disabledDate'),

  helper.deprecateProp('Calendar', 'value', {
    reason: 'Calendar[value] 仅支持传入 Moment 对象实例',
  }),
  helper.deprecateProp('Calendar', 'defaultValue', {
    reason: 'Calendar[value] 仅支持传入 Moment 对象实例',
  }),
  helper.deprecateProp('Calendar', 'base', {
    reason: 'Calendar[base] 已废弃，可以使用 defaultVisibleMonth 替换',
  }),
  helper.deprecateProp('Calendar', 'defaultBase', {
    reason: 'Calendar[defaultBase] 已废弃，可以使用 defaultVisibleMonth 替换',
  }),
  helper.deprecateProp('Calendar', 'mode', {
    reason: 'Calendar[mode] 取值由 month|year|decade 更改为 date|month|year',
  }),
  helper.deprecateProp('Calendar', 'language', {
    reason: 'Calendar[language] 已废弃，可以直接通过 moment.locale(language) 设置',
  }),
  helper.deprecateProp('Calendar', 'yearCellRender', {
    reason: 'Calendar[yearCellRender] 已废弃',
  }),
  helper.deprecateProp('Calendar', 'dateCellRender', {
    reason: 'Calendar[dateCellRender] 回调函数的参数1变更为 moment 对象',
  }),
  helper.deprecateProp('Calendar', 'monthCellRender', {
    reason: 'Calendar[monthCellRender] 回调函数的参数1变更为 moment 对象',
  }),

  helper.deprecateComponent('Calendar.DatePickerPanel'),
  helper.deprecateComponent('Calendar.RangePickerPanel'),
];
