/* eslint-disable no-return-assign */
import { mount, createLocalVue } from '@vue/test-utils'
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

  it('test change event', () => {
    let changeEventMockFn = null

    const wrapper = mount({
      data () {
        return {
          value: ''
        }
      },
      render () {
        changeEventMockFn = jest.fn().mockImplementation((value) => {
          this.value = value
        })
        return (
          <w-radio value={this.value} on-change={changeEventMockFn} checked label="1">男</w-radio>
        )
      }
    }, {
      localVue
    })
    const radioWrapper = wrapper.find('.w-radio__original')
    radioWrapper.trigger('click')
    expect(wrapper.vm.$data.value).toBe('1')
    expect(radioWrapper.element.checked).toBeTruthy()
    expect(changeEventMockFn).toHaveBeenCalled()
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
    const radioWappers = wrapper.findAll('.w-radio')
    expect(wrapper.vm.$data.value).toBe('1')
    expect({
      text: '男',
      checked: true
    }).toEqual({
      text: radioWappers.at(0).find('.w-radio__label').text(),
      checked: radioWappers.at(0).find('.w-radio__original').element.checked
    })
    expect({
      text: '女',
      checked: false
    }).toEqual({
      text: radioWappers.at(1).find('.w-radio__label').text(),
      checked: radioWappers.at(1).find('.w-radio__original').element.checked
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
    const radioWapper = wrapper.findAll('.w-radio').at(0).find('.w-radio__original')
    expect(wrapper.vm.$data.value).toBe('1')
    expect(radioWapper.element.checked).toBe(true)
    expect(radioWapper.element.disabled).toBe(true)
  })

  it('test group click', () => {
    let changeEventMockFn = null
    const wrapper = mount({
      data () {
        return {
          value: ''
        }
      },
      render () {
        changeEventMockFn = jest.fn().mockImplementation((value) => {
          this.value = value
        })
        return (
          <w-radio-group value={this.value} on-change={changeEventMockFn}>
            <w-radio label="1">男</w-radio>
            <w-radio label="2">女</w-radio>
          </w-radio-group>
        )
      }
    }, {
      localVue
    })
    const radioWapper = wrapper.findAll('.w-radio').at(0).find('.w-radio__original')
    radioWapper.trigger('click')
    expect(wrapper.vm.$data.value).toBe('1')
    expect(changeEventMockFn).toHaveBeenCalled()
  })
})
