const helper = require('../../lib/helpers/index');

module.exports = [
  helper.replaceProp('Form', 'direction=hoz', 'inline=true'),
  helper.removeProp('Form', 'direction=ver'),
  helper.replaceProp('Form', 'validateStatus', 'validateState'),
];
