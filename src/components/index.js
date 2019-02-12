import Vue from 'vue'

import TableColumn from './TableColumn'

// 导入需要被全局注册的组件
const globalComponents = [
  TableColumn,
]

globalComponents.install = () => {
  globalComponents.map((component) => {
    Vue.component(component.name, component)
  })
}

export default globalComponents
