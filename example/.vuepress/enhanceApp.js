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
  loadScript('//at.alicdn.com/t/font_1924212_8zejwbaz66g.js')
  Vue.use(Components)
}
