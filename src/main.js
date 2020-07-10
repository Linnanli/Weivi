import Vue from 'vue'
import App from './App.vue'
import router from './router'
import GButton from './components/button'
import './assets/style/index.scss'
import GIcon from './components/icon'
import GButtonGroup from './components/button-group'
import GInput from './components/input'

Vue.config.productionTip = false

Vue.use(GButton)
Vue.use(GIcon)
Vue.use(GButtonGroup)
Vue.use(GInput)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
