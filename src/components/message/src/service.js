import message from './message'

let MessageConstructor = null

const instances = {}

function setInstance (instance) {
  // 标记index
  const keys = Object.keys(instances)
  const maxIndex = Math.max(...(keys.length === 0 ? [0] : keys))
  const index = keys.length === 0 ? 0 : maxIndex + 1
  instances[index] = instance
  instance.$el.setAttribute('index', index)
  // 设置top定位
  let offsetTop = 0
  for (const key in instances) {
    const instance = instances[key]
    offsetTop += instance.$el.offsetHeight + 16
  }
  instance.$el.style.top = `${offsetTop}px`
}

function removeInstance (instance) {
  delete instances[instance.$el.getAttribute('index')]

  let offsetTop = 0
  let index = 0
  for (const key in instances) {
    const instance = instances[key]
    offsetTop += index === 0 ? 16 : instance.$el.offsetHeight + 16
    instance.$el.style.top = `${offsetTop}px`
    index++
  }
}

function transformOptions (options) {
  const onClose = options.onClose
  options.onClose = function (instance) {
    removeInstance(instance)
    if (typeof onClose === 'function') {
      onClose(instance)
    }
  }
}

export default (Vue) => {
  if (!MessageConstructor) {
    MessageConstructor = Vue.extend(message)
  }
  const Loading = (options) => {
    transformOptions(options)
    const instance = new MessageConstructor({
      propsData: options
    })
    instance.$mount()
    setInstance(instance)
    document.body.appendChild(instance.$el)
    instance.visible = true
    return instance
  }

  return Loading
}
