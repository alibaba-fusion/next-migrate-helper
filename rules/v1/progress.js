const helper = require('../../lib/helpers/index');

module.exports = [
  helper.replaceProp('Progress', 'type', 'shape'),
  helper.removeProp('Progress', 'showInfo'),
  helper.deprecateProp('Progress', 'suffix', {
    reason: 'Progress[suffix] 已被废弃，使用 textRender 替代',
  }),
  helper.removeProp('Progress', 'animation', {
    reason: 'Progress[animation] 已被废弃，不再在初始化时载入动效',
  }),
];
