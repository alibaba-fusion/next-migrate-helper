const helper = require('../../lib/helpers/index');

module.exports = [
  helper.replaceProp('Step', 'type', 'shape'),

  helper.deprecateProp('Step.Item', 'itemRender', {
    reason: 'https://github.com/alibaba-fusion/next/wiki/0.x-%E5%88%B0-1.x%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97#step',
  }),
];
