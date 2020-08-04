import { destroyAll, serviceFactory } from './src/service'

export default {
  destroyAll,
  install: (Vue) => {
    Vue.prototype.$message = serviceFactory(Vue)
  }
}
