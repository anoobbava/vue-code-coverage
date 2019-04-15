import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  const wrapper = mount(App)

  it('it contains the ButtonClick component', () => {
    expect(wrapper.html()).toContain('<h3>welcome to button count application</h3>')
  })
})
