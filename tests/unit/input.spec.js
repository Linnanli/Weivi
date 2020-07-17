/* eslint-disable no-return-assign */
import { mount, createLocalVue } from '@vue/test-utils'
import WInput from '@/components/input'
import WIcon from '@/components/icon'

const localVue = createLocalVue()
localVue.use(WInput)
localVue.use(WIcon)

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
          <w-input value={ this.value }
            on-input={ value => this.value = value }
            placeholder="请输入内容"/>
        )
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(WInput)
    const inputEle = wrapper.find('input')
    expect(wrapper.classes()).toContain('w-input')
    expect(inputEle.element.value).toBe(inputValue)
    expect(inputEle.attributes('placeholder')).toBe('请输入内容')
  })

  it('test disabled input', () => {
    let wrapper = mount({
      render () {
        return (
          <w-input disabled/>
        )
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(WInput)
    const inputEle = wrapper.find('input')
    expect(inputEle.attributes('disabled')).toBe('disabled')
  })

  it('test clearable', () => {
    let wrapper = mount({
      data () {
        return {
          value: '1'
        }
      },
      render () {
        return (
          <w-input value={this.value}
            on-input={value => this.value = value}
            clearable/>
        )
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(WInput)
    const clearButton = wrapper.find('.w-input__clear')
    clearButton.trigger('click')
    const inputEle = wrapper.find('input')
    expect(inputEle.element.value).toBe('')
  })

  it('test prefixIcon and suffixIcon', async () => {
    let wrapper = mount({
      render () {
        return (
          <w-input prefix-icon={'setting'} suffix-icon={'setting'}/>
        )
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(WInput)
    const prefixIcon = wrapper.find('.w-input__prefix .w-input__icon')
    const suffixIcon = wrapper.find('.w-input__suffix .w-input__icon')
    expect(prefixIcon.exists()).toBe(true)
    expect(suffixIcon.exists()).toBe(true)
  })

  it('test icon slot', () => {
    let wrapper = mount({
      render () {
        return (
          <w-input>
            <w-icon class="w-input__icon" slot="prefix" name="loading"></w-icon>
            <w-icon class="w-input__icon" slot="suffix" name="loading"></w-icon>
          </w-input>
        )
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(WInput)
    const prefixIcon = wrapper.find('.w-input__prefix .w-input__icon')
    const suffixIcon = wrapper.find('.w-input__suffix .w-input__icon')
    expect(prefixIcon.exists()).toBe(true)
    expect(suffixIcon.exists()).toBe(true)
  })

  it('test input event', () => {
    const onBlur = jest.fn()
    const onFocus = jest.fn()

    let wrapper = mount({
      render () {
        return (
          <w-input on-blur={onBlur} on-focus={onFocus}/>
        )
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(WInput)
    const inputEle = wrapper.find('input')
    inputEle.trigger('blur')
    inputEle.trigger('focus')
    expect(onBlur).toHaveBeenCalled()
    expect(onFocus).toHaveBeenCalled()
  })
})
