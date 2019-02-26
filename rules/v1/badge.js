const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateProp('Badge', 'align', {
    reason: '`Badge[align]` 已被废弃'
  })
];