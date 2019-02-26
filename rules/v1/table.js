const helper = require('../../lib/helpers/index');

module.exports = [
  helper.replaceProp('Table', 'expandedRowKeys', 'openRowKeys'),
  helper.replaceProp('Table', 'onExpandedChange', 'onRowOpen'),
  helper.replaceProp('Table', 'isLoading', 'loading'),
  helper.replaceProp('Table', 'indentSize', 'indent'),
  helper.replaceProp('Table', 'optimization', 'pure'),
  helper.deprecateProp('Table', 'getRowClassName', {
    reason: '`Table[getRowClassName]` 已被废弃，请使用 Table[getRowProps] 返回 className 替代'
  })
];
