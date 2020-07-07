import { shallowMount, mount } from '@vue/test-utils'
import GButton from '@/components/button'
import GIcon from '@/components/icon'

describe('button', () => {
  it('test create', () => {
    const wrapper = shallowMount(GButton, {
      slots: {
        default: 'i am button'
      }
    })
    expect(wrapper.classes()).toContain('g-button')
    expect(wrapper.text()).toBe('i am button')
  })

  it('test loading', async () => {
    const wrapper = mount(GButton, {
      components: {
        GIcon
      },
      propsData: {
        loading: true
      },
      slots: {
        default: 'i am button'
      }
    })
    const svgEl = wrapper.find('svg')
    expect(svgEl.classes()).toContain('loading')
    expect(wrapper.attributes('disabled')).toBe('disabled')
  })

  it('test disabled', async () => {
    const wrapper = shallowMount(GButton, {
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
    const wrapper = mount(GButton, {
      components: {
        GIcon
      },
      propsData: {
        icon: 'setting'
      },
      slots: {
        default: 'i am button'
      }
    })
    const iconComponent = wrapper.findComponent({ name: 'GIcon' })
    expect(iconComponent.props().name).toBe('setting')
  })

  it('test icon position', () => {
    const wrapper = mount(GButton, {
      components: {
        GIcon
      },
      propsData: {
        iconPosition: 'right',
        icon: 'setting'
      },
      slots: {
        default: 'i am button'
      }
    })
    expect(wrapper.classes()).toContain('icon-right')
  })

  it('test button click', () => {
    const onClick = jest.fn()
    const wrapper = mount(GButton, {
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
