const helper = require('../../lib/helpers/index');

module.exports = [
    helper.replaceProp('Range', 'tipFormatter', 'tipRender', {
        reason: 'Range[tipFormatter] 已被废弃，请使用tipRender属性'
    })
];