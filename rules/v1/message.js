const helper = require('../../lib/helpers/index');

module.exports = [
  helper.replaceComponent('Feedback', 'Message'),
  helper.replaceProp('Message', 'type=prompt', 'type=warning', {
    reason: '使用 `Message[type=warning]` 代替 `Feedback[type=prompt]`'
  }),
  helper.replaceComponent('Notice', 'Message'),
  helper.replaceProp('Message', 'closable', 'closeable', {
    reason: '使用 `Message[closeable]` 代替 `Notice[closable]`'
  }),
  helper.replaceProp('Message', 'type=prompt', 'type=notice', {
    reason: '使用 `Message[type=notice]` 代替 `Notice[type=prompt]`'
  }),
  helper.deprecateProp('Message', 'type=system', {
    reason: '`Notice[type=system]` 已被废弃'
  }),
  helper.deprecateProp('Message', 'shape=standalone', {
    reason: '`Notice[shape=standalone]` 已被废弃'
  }),
];
