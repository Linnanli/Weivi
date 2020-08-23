/* eslint-disable no-return-assign */
import { mount, createLocalVue } from '@vue/test-utils'
import Checkbox from '@/components/checkbox'
import CheckboxGourp from '@/components/checkbox-group'

const localVue = createLocalVue()
localVue.use(Checkbox)
localVue.use(CheckboxGourp)

describe('col component', () => {
  it('test create', () => {
    const wrapper = mount({
      data () {
        return {
          value: true
        }
      },
      render () {
        return (
          <w-checkbox value={this.value} on-change={value => this.value = value}>男</w-checkbox>
        )
      }
    }, {
      localVue
    })
    const checkboxWrapper = wrapper.findComponent(Checkbox)
    expect(wrapper.vm.$data.value).toBe(true)
    expect(checkboxWrapper.find('.w-checkbox__label').text()).toBe('男')
    expect(checkboxWrapper.find('.w-checkbox__original').element.checked).toBeTruthy()
  })

  it('test checked', () => {
    const wrapper = mount({
      data () {
        return {
          value: false
        }
      },
      render () {
        return (
          <w-checkbox value={this.value} on-change={value => this.value = value} checked>男</w-checkbox>
        )
      }
    }, {
      localVue
    })
    const checkboxWrapper = wrapper.findComponent(Checkbox)
    expect(wrapper.vm.$data.value).toBe(true)
    expect(checkboxWrapper.find('.w-checkbox__original').element.checked).toBeTruthy()
  })

  it('test disabled', () => {
    const wrapper = mount({
      data () {
        return {
          value: false
        }
      },
      render () {
        return (
          <w-checkbox value={this.value} on-change={value => this.value = value} disabled>男</w-checkbox>
        )
      }
    }, {
      localVue
    })
    const checkboxWrapper = wrapper.findComponent(Checkbox)
    expect(checkboxWrapper.find('.w-checkbox__original').element.disabled).toBeTruthy()
  })

  it('test custom value and click event', () => {
    let clickEventMockFn = null
    const wrapper = mount({
      data () {
        return {
          value: ''
        }
      },
      render () {
        clickEventMockFn = jest.fn().mockImplementation((value) => {
          this.value = value
        })
        return (
          <w-checkbox value={this.value} on-change={clickEventMockFn} true-value="1" false-value="2">男</w-checkbox>
        )
      }
    }, {
      localVue
    })
    const checkboxWrapper = wrapper.findComponent(Checkbox).find('.w-checkbox__original')
    checkboxWrapper.trigger('click')
    expect(wrapper.vm.$data.value).toBe('1')
    expect(clickEventMockFn).toHaveBeenCalled()
  })

  it('test group', () => {
    let clickEventMockFn = null
    const wrapper = mount({
      data () {
        return {
          value: ['A']
        }
      },
      render () {
        clickEventMockFn = jest.fn().mockImplementation((value) => {
          this.value = value
        })
        return (
          <w-checkbox-group value={this.value} on-change={clickEventMockFn}>
            <w-checkbox label="A">A</w-checkbox>
            <w-checkbox label="B" checked>B</w-checkbox>
            <w-checkbox label="C">C</w-checkbox>
          </w-checkbox-group>
        )
      }
    }, {
      localVue
    })
    const checkboxWrapper = wrapper.findAllComponents(Checkbox)
    checkboxWrapper.at(2).trigger('click')
    expect(checkboxWrapper.length).toBe(3)
    expect(wrapper.vm.$data.value).toEqual(['A', 'B', 'C'])
    expect(clickEventMockFn).toHaveBeenCalled()
  })
})
