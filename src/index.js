import GButton from './components/button'
import GButtonGroup from './components/button-group'
import GIcon from './components/icon'
import GInput from './components/input'

const components = {
  GButton,
  GButtonGroup,
  GIcon,
  GInput
}

const install = (Vue) => {
  for (const key in components) {
    const component = components[key]
    Vue.component(component.name, component)
  }
}

export default {
  ...components,
  install
}
