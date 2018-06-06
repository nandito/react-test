import React from 'react'
import { shallow } from 'enzyme'
import dictionary from './dictionary'
import App, { Header } from './App'

describe('App', () => {
  it('renders the App', () => {
    const wrapper = shallow(<App />)
  })
})

describe('Header', () => {
  it('renders the Header without crash', () => {
    const wrapper = shallow(<Header />)
  })
  
  it('renders the Header with header and h1 tags', () => {
    const outer = shallow(<Header />)
    const Children = outer.prop('children')
    const wrapper = shallow(<Children />)

    expect(wrapper.find('header')).toHaveLength(1)
    expect(wrapper.find('h1')).toHaveLength(1)
  })

  it('renders the title on the proper language', () => {
    const outer = shallow(<Header />)    
    const Children = outer.prop('children')
    const wrapper = shallow(<Children language="en"/>)

    expect(wrapper.find('h1').text()).toBe(dictionary['GREETING']['en'])
    expect(wrapper.find('h1').text()).toBe('Hello World!')
  })

  it('renders the title on the proper language (with render helper)', () => {
    const wrapper = shallowRenderProps(<Header/>, { language: 'en' })

    expect(wrapper.find('h1').text()).toBe(dictionary['GREETING']['en'])
    expect(wrapper.find('h1').text()).toBe('Hello World!')
  })
})

export const shallowRenderProps = (Component, injectedProps) => {
  const outer = shallow(Component)
  const Children = outer.prop('children')
  const childrenWrapper = shallow(<Children {...injectedProps} />)
  const wrapper = childrenWrapper.shallow()

  return wrapper
}
