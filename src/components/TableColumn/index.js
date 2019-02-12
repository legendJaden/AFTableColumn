import TableColumn from './TableColumn.vue'

TableColumn.install = (Vue, options) => {
  Vue.prototype.$ELEMENT = options
}

export default TableColumn
