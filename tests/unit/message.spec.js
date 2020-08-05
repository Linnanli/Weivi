import { createWrapper, createLocalVue } from '@vue/test-utils'
import Message from '@/components/message'

const localVue = createLocalVue()
const Vue = localVue
const messageService = Message.messageService

describe('message component', () => {
  it('test $message', () => {
    const vue = new Vue()
    Vue.use(Message)
    expect(vue.$message).toEqual(messageService)
  })
  it('test message test', () => {
    messageService('这是一个message')
    const messageWrapper = createWrapper(document.querySelector('.w-message').__vue__)
    expect(messageWrapper.exists()).toBe(true)
    expect(messageWrapper.find('.w-message__content').text()).toBe('这是一个message')
  })
})
