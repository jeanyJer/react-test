import React from 'react';
import MovieDetail from '../../../app/components/movie/movieDetail';
import { mount } from 'enzyme';

const setup = () => {
  let props = {
    params: {
      id: 12345
    }
  };
  let wrapper = mount(<MovieDetail {...props} />);
  return {
    props,
    wrapper
  }
}


describe('This is a test for movieDetail component', () => {
  const { state, props, wrapper } = setup();

  it('movieDetail component should be render', () => {
    expect(wrapper.find(".summary").exists());
  });

  it('summary content should be show', () => {
    let temp = wrapper.find(".summary").find('p');

    console.log('temp', temp.length);
   // expect(wrapper.find('.average').text()).toContain('10');
  });

});




