import Components from '@'
import '@/assets/style/index.scss'

function loadScript (src) {
  const script = document.createElement('script')
  script.src = src
  document.body.appendChild(script)
}

export default ({
  Vue
}) => {
  loadScript('//at.alicdn.com/t/font_1924212_5utzby7w1w.js')
  Vue.use(Components)
}
