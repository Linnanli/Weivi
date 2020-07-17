import WButton from './components/button'
import WButtonGroup from './components/button-group'
import WIcon from './components/icon'
import WInput from './components/input'

const components = {
  WButton,
  WButtonGroup,
  WIcon,
  WInput
}

const install = (Vue) => {
  for (const key in components) {
    const component = components[key]
    Vue.component(component.name, component)
  }
}

export default {
  version: process.env.VUE_APP_VERSION,
  ...components,
  install
}
