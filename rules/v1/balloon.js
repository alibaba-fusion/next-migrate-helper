const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateProp('Balloon', 'onCloseClick', {
    reason: 'Balloon[onCloseClick] 已被废弃，请使用onClose属性'
  }),
  helper.replaceProp('Balloon', 'alignment', 'alignEdge'),
  helper.deprecateProp('Tooltip', 'text', {
    reason: 'Tooltip[text] 已被废弃，请使用children传递内容'
  }),
];
