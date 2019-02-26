const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateProp('NumberPicker', 'inputWitdh', {
    reason: '`NumberPicker[inputWitdh]` 已被废弃，请使用 style={width}'
  })
];
