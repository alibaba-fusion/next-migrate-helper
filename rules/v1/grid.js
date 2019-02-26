const helper = require('../../lib/helpers/index');

module.exports = [
  helper.removeProp('Grid.Row', 'type=fluid'),
  helper.replaceProp('Grid.Row', 'type=fixed', 'fixed'),
  helper.replaceProp('Grid.Row', 'type=wrap', 'wrap=true'),
  helper.replaceProp('Grid.Row', 'type=nowrap', 'wrap=false'),
  helper.removeProp('Grid.Row', 'type=no-padding'),
  helper.removeProp('Grid.Row', 'type=across'),
  helper.deprecateProp('Grid.Row', 'type', {
    reason: '`Grid.Row[type]` 已被废弃，迁移办法见 https://github.com/alibaba-fusion/next/wiki/0.x-%E5%88%B0-1.x%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97#grid'
  }),
  helper.replaceProp('Grid.Row', 'offsetFixed', 'fixedOffset')
];
