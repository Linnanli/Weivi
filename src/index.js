import Button from './components/button'
import ButtonGroup from './components/button-group'
import Icon from './components/icon'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'
import Layout from './components/layout'
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'
import Aside from './components/aside'
import Message from './components/message'
import Radio from './components/radio'
import RadioGroup from './components/radio-group'

const services = {
  Message
}

const components = {
  Button,
  ButtonGroup,
  Icon,
  Input,
  Row,
  Col,
  Layout,
  Header,
  Footer,
  Main,
  Aside,
  Radio,
  RadioGroup
}

const install = (Vue) => {
  for (const key in components) {
    const component = components[key]
    Vue.component(component.name, component)
  }
  for (const key in services) {
    const service = services[key]
    Vue.use(service)
  }
}

export default {
  version: process.env.VUE_APP_VERSION,
  ...components,
  ...services,
  install
}
