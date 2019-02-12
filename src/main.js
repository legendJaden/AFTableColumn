import Vue from 'vue'
import App from './App'
import {
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Button,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import constants from './configs/constants'
import mockData from './configs/mockData'

// 全局组件
import globalComponents from './components'

Vue.config.productionTip = false

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Button)
Vue.use(globalComponents)

Vue.prototype.$consts = constants
Vue.prototype.$mockData = mockData

new Vue({
  render: h => h(App),
}).$mount('#app')
