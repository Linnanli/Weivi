/* eslint-disable no-return-assign */
import { mount, createLocalVue } from '@vue/test-utils'
import GInput from '@/components/input'

const localVue = createLocalVue()
localVue.use(GInput)

describe('input component', () => {
  it('test create input', () => {
    const inputValue = 'input text'
    let wrapper = mount({
      data () {
        return {
          value: inputValue
        }
      },
      render () {
        return (
          <g-input value={ this.value }
            on-input={ value => this.value = value }
            placeholder="请输入内容"/>
        )
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(GInput)
    const inputEle = wrapper.find('input')
    expect(wrapper.classes()).toContain('g-input')
    expect(inputEle.element.value).toBe(inputValue)
    expect(inputEle.attributes('placeholder')).toBe('请输入内容')
  })
})
