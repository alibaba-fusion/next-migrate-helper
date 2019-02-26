const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateProp('Search', 'autoWidth', {
    reason: '`Search[autoWidth]` 迁移方案见: https://github.com/alibaba-fusion/next/wiki/0.x-%E5%88%B0-1.x%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97#search'
  }),
  helper.deprecateProp('Search', 'inputWitdh', {
    reason: '`Search[inputWitdh]` 已被废弃，请使用 style={{width}}'
  })
];
