import { mount, createLocalVue } from '@vue/test-utils'
import WButton from '@/components/button'
import WButtonGroup from '@/components/button-group'

const localVue = createLocalVue()
localVue.use(WButton)
localVue.use(WButtonGroup)

describe('button group', () => {
  it('test select event', () => {
    const onSelect = jest.fn()
    const wrapper = mount({
      render () {
        return (
          <w-button-group on-select={onSelect}>
            <w-button button-key="prev">上一页</w-button>
            <w-button>下一页</w-button>
          </w-button-group>
        )
      }
    }, {
      localVue
    })
    const buttons = wrapper.findAllComponents(WButton)
    buttons.at(0).trigger('click')
    buttons.at(1).trigger('click')
    expect(onSelect.mock.calls.length).toBe(2)
    expect(onSelect.mock.calls[0][0]).toBe('prev')
    expect(onSelect.mock.calls[1][0]).toBe(1)
  })
})
