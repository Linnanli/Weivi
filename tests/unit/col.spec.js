import { mount, createLocalVue } from '@vue/test-utils'
import WRow from '@/components/row'
import WCol from '@/components/col'

const localVue = createLocalVue()
localVue.use(WRow)
localVue.use(WCol)

describe('col component', () => {
  it('test gutter', () => {
    let wrapper = mount({
      render () {
        return (
          <w-row gutter="20">
            <w-col></w-col>
          </w-row>
        )
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(WCol)
    expect(wrapper.element.style.paddingLeft).toBe('10px')
    expect(wrapper.element.style.paddingRight).toBe('10px')
  })

  it('test span and offset', () => {
    let wrapper = mount({
      render () {
        return (
          <w-row>
            <w-col span={12} offset={12}></w-col>
          </w-row>
        )
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(WCol)
    const classes = wrapper.classes()
    expect(classes).toContain('w-col-12')
    expect(classes).toContain('w-col-offset-12')
  })

  it('test xs sm md lg', () => {
    let wrapper = mount({
      render () {
        return (
          <w-row>
            <w-col xs={ { span: 12, offset: 12 } }
              sm={ { span: 8, offset: 8 } }
              md={ { span: 6, offset: 6 } }
              lg={ { span: 4, offset: 4 } }></w-col>
          </w-row>
        )
      }
    }, {
      localVue
    })
    wrapper = wrapper.findComponent(WCol)
    const classes = wrapper.classes()
    expect(classes).toContain('w-col-xs-12')
    expect(classes).toContain('w-col-xs-offset-12')
    expect(classes).toContain('w-col-sm-8')
    expect(classes).toContain('w-col-sm-offset-8')
    expect(classes).toContain('w-col-md-6')
    expect(classes).toContain('w-col-md-offset-6')
    expect(classes).toContain('w-col-lg-4')
    expect(classes).toContain('w-col-lg-offset-4')
  })
})
