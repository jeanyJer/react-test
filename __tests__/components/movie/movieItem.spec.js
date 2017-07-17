import React from 'react';
import MovieItem from '../../../app/components/movie/movieItem';
import { mount } from 'enzyme';

const setup = () => {
  let props = {
    content: {
      title: "张艺谋电影1",
      images: {medium: '10'},
      genres: ['xu','jin'],
      year: '2100',
      rating:{average: '10'},
      collect_count: '11'
    }
  };
  let wrapper = mount(<MovieItem {...props} />);
  return {
    props,
    wrapper
  }
}


describe('This is a test for movieItem component', () => {
  const { props, wrapper } = setup();

  it('movieItem component should be render', () => {
    expect(wrapper.find(".summary").exists());
  });

  it('summary content should be show', () => {
    expect(wrapper.find(".summary").find('span').text()).toContain('10');
  });

});




