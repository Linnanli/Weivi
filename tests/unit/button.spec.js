import { shallowMount, mount } from '@vue/test-utils'
import WButton from '@/components/button'
import WIcon from '@/components/icon'

describe('button', () => {
  it('test create', () => {
    const wrapper = shallowMount(WButton, {
      slots: {
        default: 'i am button'
      }
    })
    expect(wrapper.classes()).toContain('w-button')
    expect(wrapper.text()).toBe('i am button')
  })

  it('test loading', async () => {
    const wrapper = mount(WButton, {
      components: {
        WIcon
      },
      propsData: {
        loading: true
      },
      slots: {
        default: 'i am button'
      }
    })
    const svgEl = wrapper.find('svg')
    expect(svgEl.classes()).toContain('w-button__loading')
    expect(wrapper.attributes('disabled')).toBe('disabled')
  })

  it('test disabled', async () => {
    const wrapper = shallowMount(WButton, {
      propsData: {
        disabled: true
      },
      slots: {
        default: 'i am button'
      }
    })
    expect(wrapper.attributes('disabled')).toBe('disabled')
  })

  it('test button icon', async () => {
    const wrapper = mount(WButton, {
      components: {
        WIcon
      },
      propsData: {
        icon: 'setting'
      },
      slots: {
        default: 'i am button'
      }
    })
    const iconComponent = wrapper.findComponent({ name: 'WIcon' })
    expect(iconComponent.props().name).toBe('setting')
  })

  it('test icon position', () => {
    const wrapper = mount(WButton, {
      components: {
        WIcon
      },
      propsData: {
        iconPosition: 'right',
        icon: 'setting'
      },
      slots: {
        default: 'i am button'
      }
    })
    expect(wrapper.classes()).toContain('w-button__icon--right')
  })

  it('test button click', () => {
    const onClick = jest.fn()
    const wrapper = shallowMount(WButton, {
      slots: {
        default: 'i am button'
      },
      listeners: {
        click: onClick
      }
    })
    wrapper.trigger('click')
    expect(onClick).toHaveBeenCalled()
  })
})
