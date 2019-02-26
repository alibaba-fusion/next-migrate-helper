const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateProp('Rating', 'type', {
    reason: '`Rating[type]` 已被废弃，迁移办法见 https://github.com/alibaba-fusion/next/wiki/0.x-%E5%88%B0-1.x%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97#rating'
  }),
  helper.deprecateProp('Rating', 'showInfo', {
    reason: '`Rating[showInfo]` 已被废弃，请自行封装'
  }),
];
