import Vue from 'vue'
import message from './message'

let MessageConstructor = null

const instances = {}
let globalOptions = {}

function mergeOptions (options) {
  for (const key in globalOptions) {
    if (~['message', 'type'].indexOf(key)) {
      delete globalOptions[key]
    }
    if (!(key in options)) {
      options[key] = globalOptions[key]
    }
  }
}

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

function transformOptions (options, resolve) {
  let message = ''
  if (typeof options === 'string') {
    message = options
    options = {
      message
    }
  }

  mergeOptions(options)

  const onClose = options.onClose
  options.onClose = function (instance) {
    removeInstance(instance)
    if (typeof onClose === 'function') {
      onClose()
    }
    resolve(instance)
  }

  return options
}

function createMessageTypeFunc (types) {
  for (let i = 0; i < types.length; i++) {
    const type = types[i]
    messageService[type] = function (options) {
      options.type = type
      return messageService(options)
    }
  }
}

createMessageTypeFunc(['success', 'error', 'info', 'warning'])

export function messageService (options) {
  if (!MessageConstructor) {
    MessageConstructor = Vue.extend(message)
  }

  return new Promise((resolve) => {
    options = transformOptions(options, resolve)
    const instance = new MessageConstructor({
      propsData: options
    })
    instance.$mount()
    setInstance(instance)
    document.body.appendChild(instance.$el)
    instance.open()
  })
}

export function destroyAll () {
  for (const key in instances) {
    const instance = instances[key]
    instance.close()
  }
}

export function config (options) {
  globalOptions = options
}
