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
})
