const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateProp('DatePicker', 'value', {
    reason: 'DatePicker[value] 仅支持传入 Moment 对象实例',
  }),
  helper.deprecateProp('DatePicker', 'defaultValue', {
    reason: 'DatePicker[defaultValue] 仅支持传入 Moment 对象实例',
  }),
  helper.deprecateProp('DatePicker', 'base', {
    reason: 'DatePicker[base] 废弃，可以使用 defaultVisibleMonth 修改默认展示月份',
  }),
  helper.deprecateProp('DatePicker', 'defaultBase', {
    reason: 'DatePicker[defaultBase] 废弃，可以使用 defaultVisibleMonth 修改默认展示月份',
  }),
  helper.deprecateProp('DatePicker', 'language', {
    reason: 'DatePicker[language] 废弃，可以通过设置 moment.locale(language) 来替换',
  }),
  helper.replaceProp('DatePicker', 'formater', 'format'),
  helper.replaceProp('DatePicker', 'open', 'visible'),
  helper.replaceProp('DatePicker', 'defaultOpen', 'defaultVisible'),
  helper.deprecateComponent('DatePicker.MonthPicker'),
  helper.deprecateComponent('DatePicker.YearPicker'),

  helper.deprecateProp('DatePicker.RangePicker', 'value', {
    reason: 'DatePicker.RangePicker[value] 仅支持传入 Moment 对象实例',
  }),
  helper.deprecateProp('DatePicker.RangePicker', 'defaultValue', {
    reason: 'DatePicker.RangePicker[defaultValue] 仅支持传入 Moment 对象实例',
  }),
  helper.deprecateProp('DatePicker.RangePicker', 'base', {
    reason: 'DatePicker.RangePicker[base] 废弃，可以使用 defaultVisibleMonth 修改默认展示月份',
  }),
  helper.deprecateProp('DatePicker.RangePicker', 'defaultBase', {
    reason: 'DatePicker[defaultBase] 废弃，可以使用 defaultVisibleMonth 修改默认展示月份',
  }),
  helper.deprecateProp('DatePicker.RangePicker', 'ranges', {
    reason: 'DatePicker.RangePicker[ranges] 废弃，建议上层自行分装提供',
  }),
  helper.deprecateProp('DatePicker.RangePicker', 'language', {
    reason: 'DatePicker.RangePicker[language] 废弃，可以通过设置 moment.locale(language) 来替换',
  }),
  helper.replaceProp('DatePicker.RangePicker', 'formater', 'format'),
  helper.replaceProp('DatePicker.RangePicker', 'open', 'visible'),
  helper.replaceProp('DatePicker.RangePicker', 'defaultOpen', 'defaultVisible'),
];
