const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateProp('TimePicker', 'value', {
    reason: 'TimePicker[value] 仅支持传入 Moment 对象实例',
  }),
  helper.deprecateProp('TimePicker', 'defaultValue', {
    reason: 'TimePicker[value] 仅支持传入 Moment 对象实例',
  }),
  helper.replaceProp('TimePicker', 'open', 'visible'),
  helper.replaceProp('TimePicker', 'defaultOpen', 'defaultVisible'),
];
