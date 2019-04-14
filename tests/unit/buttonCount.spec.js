import { shallowMount } from '@vue/test-utils'
import ButtonCount from '@/components/ButtonCount.vue'

describe('ButtonCount.vue', () => {
  const wrapper = shallowMount(ButtonCount)

  // checks ButtonCount is a component.
  it('Register is a component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // checks value of the counter is zero initially
  it('count is initially zero', () => {
    expect(wrapper.vm.count).toBe(0)
  })

  // check the button present or not
  it('is the button present', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  // checks the counter increment on clicking the button
  it('counter incremented or not', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})
