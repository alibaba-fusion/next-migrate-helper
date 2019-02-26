const helper = require('../../lib/helpers/index');

module.exports = [
  helper.deprecateProp('Tree', 'onCheck', {
    reason: '接受对象做为值时，由 {checked: Array, halfChecked: Array} 更改为 {checked: Array, indeterminate: Array}'
  }),
  helper.deprecateProp('Tree', 'onDrop', {
    reason: '第二个参数 info 的 info.dropPosition，其含义由拖拽后被拖拽的节点出现在放置节点当前层的位置改为义由拖拽后被拖拽的节点相比放置节点的位置，在放置节点之前值为-1，在放置节点内部值为0，在放置节点后值为'
  }),
  helper.deprecateProp('Tree', 'canDrop', {
    reason: '第二个参数 info 的 info.dropPosition，其含义由拖拽后被拖拽的节点出现在放置节点当前层的位置改为义由拖拽后被拖拽的节点相比放置节点的位置，在放置节点之前值为-1，在放置节点内部值为0，在放置节点后值为'
  }),
  helper.replaceProp('Tree.Node', 'disableCheckbox', 'checkboxDisabled')
];
