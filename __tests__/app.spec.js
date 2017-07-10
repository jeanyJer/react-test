import App from '../app/components/App';
import { mount } from 'enzyme';
import React from 'react';

describe('actions test', () => {
  it('App component should be render', () => {
    let wrapper = mount(<App />);
    expect(wrapper.find(".container").exists());
  });

})
