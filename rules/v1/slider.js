const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateProp('Slider', 'beforeChange', {
    reason: '`Slider[beforeChange]` 已被废弃，使用 `onChange` 替代',
  }),
  helper.deprecateProp('Slider', 'afterChange', {
    reason: '`Slider[afterChange]` 已被废弃，使用 `onChange` 替代',
  }),
  helper.replaceProp('Slider', 'fade', 'animation=fade'),
  helper.replaceProp('Slider', 'arrowPos', 'arrowPosition'),
  helper.deprecateProp('Slider', 'arrowPosition', {
    reason: '`Slider[arrowPos=inline]` 已被废弃，使用 `Slider[arrowPosition=inner]` 替代',
  }),
  helper.replaceProp('Slider', 'initialSlide', 'defaultIndex'),
  helper.replaceProp('Slider', 'slickGoTo', 'activeIndex'),
];
