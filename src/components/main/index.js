import WMain from './src/main'

WMain.install = (Vue) => {
  Vue.component(WMain.name, WMain)
}

export default WMain
