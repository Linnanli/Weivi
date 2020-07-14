import GButton from '../../src/components/button'
import GIcon from '../../src/components/icon'
import GButtonGroup from '../../src/components/button-group'
import GInput from '../../src/components/input'
import '../../src/assets/style/index.scss'

function loadScript (src) {
  const script = document.createElement('script')
  script.src = src
  document.body.appendChild(script)
}

export default ({
  Vue
}) => {
  loadScript('//at.alicdn.com/t/font_1924212_nqlpdxeaxf.js')
  Vue.use(GButton)
  Vue.use(GIcon)
  Vue.use(GButtonGroup)
  Vue.use(GInput)
}
