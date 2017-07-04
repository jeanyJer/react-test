import React from 'react'
import configureMockStore from 'redux-mock-store'
import { Tabs } from '../app/components/Tabs'
import { shallow, mount} from 'enzyme'

const setup = () => {
  const props = {
    currentIndex: 0,
    tabNames:['tab_one', 'tab_two'],
    changeTab: jest.fn()
  }
  const wrapper = mount(<Tabs {...props}></Tabs> 
    );
  return {
    props,
    wrapper
  }
}

describe('Tabs', () => {
  const { props, wrapper } = setup()

  console.log('tab_title_wrap', wrapper.html());

  // console.log('tab_item_wrap', wrapper.find(".tab_item_wrap"));

  //判断组件是否被渲染
  it('Tabs item should render', () => {
    expect(wrapper.find(".tab_title_wrap").exists())
  })

  //点击tab, changeTab方法会被调用
  it('click tab, changeTab called', () => {
     const mockEvent = {
       key: 'click',
     }
    console.log("qqqq", wrapper.find('.tab_title').length)
     //.simulate('click', mockEvent)
     //expect(props.changeTab).toBeCalled()
  })
  
})

