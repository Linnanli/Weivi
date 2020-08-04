import serviceFactory from './src/service'

export default {
  install: (Vue) => {
    Vue.prototype.$message = serviceFactory(Vue)
  }
}
