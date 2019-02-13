import Vue from 'vue'

import AFTableColumn from './AFTableColumn'

// 导入需要被全局注册的组件
const globalComponents = [
  AFTableColumn,
]

globalComponents.install = () => {
  globalComponents.map((component) => {
    Vue.component(component.name, component)
  })
}

export default globalComponents
