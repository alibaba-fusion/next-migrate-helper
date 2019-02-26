const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateComponent('Breadcrumb.Number', {
    reason: 'Breadcrumb.Number已废弃,使用<b>{text}</b>高亮提示',
  }),
  helper.deprecateComponent('Breadcrumb.Keyword', {
    reason: 'Breadcrumb.Keyword已废弃,使用<b>{text}</b>高亮提示',
  }),
];
