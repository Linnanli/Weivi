/* eslint-disable no-return-assign */
import { mount, createLocalVue } from '@vue/test-utils'
import GInput from '@/components/input'
import GIcon from '@/components/icon'

const localVue = createLocalVue()
localVue.use(GInput)
localVue.use(GIcon)

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

  it('test disabled input', () => {
    let wrapper = mount({
      render () {
        return (
          <g-input disabled/>
        )
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(GInput)
    const inputEle = wrapper.find('input')
    expect(inputEle.attributes('disabled')).toBe('disabled')
  })

  it('test clearable', async () => {
    let wrapper = mount({
      data () {
        return {
          value: '1'
        }
      },
      render () {
        return (
          <g-input value={this.value}
            on-input={value => this.value = value}
            clearable/>
        )
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(GInput)
    const clearButton = wrapper.find('.g-input__clear')
    await clearButton.trigger('click')
    const inputEle = wrapper.find('input')
    expect(inputEle.element.value).toBe('')
  })

  it('test prefixIcon and suffixIcon', async () => {
    let wrapper = mount({
      render () {
        return (
          <g-input prefix-icon={'setting'} suffix-icon={'setting'}/>
        )
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(GInput)
    const prefixIcon = wrapper.find('.g-input__prefix .g-input__icon')
    const suffixIcon = wrapper.find('.g-input__suffix .g-input__icon')
    expect(prefixIcon.exists()).toBe(true)
    expect(suffixIcon.exists()).toBe(true)
  })

  it('test icon slot', () => {
    let wrapper = mount({
      render () {
        return (
          <g-input>
            <g-icon class="g-input__icon" slot="prefix" name="loading"></g-icon>
            <g-icon class="g-input__icon" slot="suffix" name="loading"></g-icon>
          </g-input>
        )
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(GInput)
    const prefixIcon = wrapper.find('.g-input__prefix .g-input__icon')
    const suffixIcon = wrapper.find('.g-input__suffix .g-input__icon')
    expect(prefixIcon.exists()).toBe(true)
    expect(suffixIcon.exists()).toBe(true)
  })
})
