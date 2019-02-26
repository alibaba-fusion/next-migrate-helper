const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateProp('Animate', 'useTransition', {
    reason: '`Animate[useTransition]` 已被废弃，内部会自行判断是否使用了 transition 动画'
  })
];
