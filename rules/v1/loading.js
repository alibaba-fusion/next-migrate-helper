const helper = require('../../lib/helpers/index');

module.exports = [
  helper.removeProp('Loading', 'shape=fusion-reactor'),
  helper.deprecateProp('Loading', 'shape', {
    reason: '`Loading[shape]` 已被废弃, 默认动效为 fusion-reactor"'
  })
];
