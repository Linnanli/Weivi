import { destroyAll, config, serviceFactory } from './src/service'

export default {
  destroyAll,
  config,
  install: (Vue) => {
    Vue.prototype.$message = serviceFactory(Vue)
  }
}
