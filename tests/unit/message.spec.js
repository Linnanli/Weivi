import { createWrapper } from '@vue/test-utils'
import Message from '@/components/message'
import { timeout } from '../utils'
import Vue from 'vue'

const messageService = Message.messageService

describe('message component', () => {
  afterEach(() => {
    const ele = document.querySelector('.w-message')
    if (!ele) return
    if (ele.parentNode) ele.parentNode.removeChild(ele)
    if (ele.__vue__) ele.__vue__.$destroy()
  })

  afterAll(() => {
    delete Vue.prototype.$message
  })

  it('test $message', () => {
    const vue = new Vue()
    Vue.use(Message)
    expect(vue.$message).toEqual(messageService)
  })

  it('test message text', () => {
    messageService('这是一个message')
    const messageWrapper = createWrapper(document.querySelector('.w-message').__vue__)
    expect(messageWrapper.exists()).toBe(true)
    expect(messageWrapper.find('.w-message__content').text()).toBe('这是一个message')
  })

  it('test auto close', async () => {
    messageService({
      message: '这是一个message',
      time: 500
    })
    await Vue.nextTick()
    const messageWrapper = createWrapper(document.querySelector('.w-message').__vue__)
    expect(messageWrapper.exists()).toBe(true)
  })

  it('test show close', async () => {
    const onCloseCallback = jest.fn()

    messageService({
      message: '这是一个message1',
      showClose: true,
      time: 0,
      onClose: onCloseCallback
    })
    await Vue.nextTick()
    const messageWrapper = createWrapper(document.querySelector('.w-message').__vue__)
    const closeWrapper = messageWrapper.find('.w-message__close')
    expect(closeWrapper.exists()).toBe(true)
    closeWrapper.trigger('click')
    await timeout(500)
    expect(onCloseCallback).toHaveBeenCalled()
    expect(messageWrapper.exists()).toBe(false)
  })
})
