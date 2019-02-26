const helper = require('../../lib/helpers/index');

module.exports = [
  helper.replaceProp('Card', 'titleBottomLine', 'showHeadDivider'),
  helper.replaceProp('Card', 'titlePrefixLine', 'showTitleBullet'),
  helper.replaceProp('Card', 'bodyHeight', 'contentHeight'),
];
