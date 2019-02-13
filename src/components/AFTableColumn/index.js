import AFTableColumn from './AFTableColumn.vue'

AFTableColumn.install = (Vue, options) => {
  Vue.prototype.$ELEMENT = options
  Vue.component(AFTableColumn.name, AFTableColumn)
}

export default AFTableColumn
