const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateProp('Paignation', 'language', {
    reason: '`Paignation[language]` 已被废弃,请使用多语言对象 `locale` 实现'
  })
];
