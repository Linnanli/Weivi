import { mount, createLocalVue } from '@vue/test-utils'
import WRow from '@/components/row'

const localVue = createLocalVue()
localVue.use(WRow)

describe('row component', () => {
  it('test gutter', () => {
    let wrapper = mount({
      render () {
        return <w-row gutter="20"></w-row>
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(WRow)
    expect(wrapper.element.style.marginLeft).toBe('-10px')
    expect(wrapper.element.style.marginRight).toBe('-10px')
  })
})
