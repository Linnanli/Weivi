import { destroyAll, config, messageService } from './src/service'

export default {
  destroyAll,
  config,
  messageService,
  install: (Vue) => {
    Vue.prototype.$message = messageService
  }
}
