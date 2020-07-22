import WButton from './components/button'
import WButtonGroup from './components/button-group'
import WIcon from './components/icon'
import WInput from './components/input'
import WRow from './components/row'
import WCol from './components/col'
import WLayout from './components/layout'
import WHeader from './components/header'
import WFooter from './components/footer'
import WMain from './components/main'
import WAside from './components/aside'

const components = {
  WButton,
  WButtonGroup,
  WIcon,
  WInput,
  WRow,
  WCol,
  WLayout,
  WHeader,
  WFooter,
  WMain,
  WAside
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
