import TableColumn from './TableColumn.vue'

TableColumn.install = (Vue, options) => {
  Vue.prototype.$ELEMENT = options
  Vue.component(TableColumn.name, TableColumn)
}

export default TableColumn
