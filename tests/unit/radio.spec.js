/* eslint-disable no-return-assign */
import { mount, createLocalVue, createWrapper } from '@vue/test-utils'
import Radio from '@/components/radio'
import RadioGourp from '@/components/radio-group'

const localVue = createLocalVue()
localVue.use(Radio)
localVue.use(RadioGourp)

describe('col component', () => {
  it('test create', () => {
    let wrapper = mount({
      data () {
        return {
          value: '1'
        }
      },
      render () {
        return (
          <w-radio value={this.value} on-change={value => this.value = value} label="1">男</w-radio>
        )
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(Radio)
    expect(wrapper.find('.w-radio__label').text()).toBe('男')
    expect(wrapper.find('.w-radio__original').element.checked).toBeTruthy()
  })

  it('test checked', () => {
    const wrapper = mount({
      data () {
        return {
          value: ''
        }
      },
      render () {
        return (
          <w-radio value={this.value} on-change={value => this.value = value} checked label="1">男</w-radio>
        )
      }
    }, {
      localVue
    })
    expect(wrapper.vm.$data.value).toBe('1')
    expect(wrapper.find('.w-radio__original').element.checked).toBeTruthy()
  })

  it('test group', () => {
    const wrapper = mount({
      data () {
        return {
          value: '1'
        }
      },
      render () {
        return (
          <w-radio-group value={this.value} on-change={value => this.value = value}>
            <w-radio label="1">男</w-radio>
            <w-radio label="2">女</w-radio>
          </w-radio-group>
        )
      }
    }, {
      localVue
    })
    const radioEles = wrapper.findAll('.w-radio')
    expect(wrapper.vm.$data.value).toBe('1')
    expect({
      text: '男',
      checked: true
    }).toEqual({
      text: radioEles.at(0).find('.w-radio__label').text(),
      checked: radioEles.at(0).find('.w-radio__original').element.checked
    })
    expect({
      text: '女',
      checked: false
    }).toEqual({
      text: radioEles.at(1).find('.w-radio__label').text(),
      checked: radioEles.at(1).find('.w-radio__original').element.checked
    })
  })

  it('test group checked', () => {
    const wrapper = mount({
      data () {
        return {
          value: '1'
        }
      },
      render () {
        return (
          <w-radio-group value={this.value} on-change={value => this.value = value}>
            <w-radio label="1">男</w-radio>
            <w-radio label="2" checked>女</w-radio>
          </w-radio-group>
        )
      }
    }, {
      localVue
    })
    expect(wrapper.vm.$data.value).toBe('2')
  })

  it('test group disabled', () => {
    const wrapper = mount({
      data () {
        return {
          value: '1'
        }
      },
      render () {
        return (
          <w-radio-group value={this.value} on-change={value => this.value = value}>
            <w-radio label="1" disabled>男</w-radio>
            <w-radio label="2">女</w-radio>
          </w-radio-group>
        )
      }
    }, {
      localVue
    })
    const radioEle = wrapper.findAll('.w-radio').at(0).find('.w-radio__original')
    expect(wrapper.vm.$data.value).toBe('1')
    expect(radioEle.element.checked).toBe(true)
    expect(radioEle.element.disabled).toBe(true)
  })
})
