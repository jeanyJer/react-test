import React from 'react';
import MovieList from '../../../app/components/movie/movieList';
import { mount } from 'enzyme';

const setup = () => {
  const props = {
    search: {
      q: '张艺谋',
      tag: '青春',
      start: 10,
      count: 10,
      total: 100
    },
    list: [
      {
        title: "张艺谋电影1",
        images: {medium: ''},
        genres: [],
        year: '2100',
        rating:{average: '10'},
        collect_count: '11'
      },{
        title: "张艺谋电影2",
        images: {medium: ''},
        genres: [],
        year: '2100',
        rating: {average: '10'},
        collect_count: '12'
      }
    ],
    page: 2,
    getMovieList: jest.fn(),
    setPageUp: jest.fn(),
    setPageDown: jest.fn(),
    resetPage: jest.fn()
  };
  const wrapper = mount(<MovieList {...props} />);
  return {
    props,
    wrapper
  }
}



describe('This is a test for bookList component', () => {
  const { props, wrapper } = setup();

  it('MovieList component should be render', () => {
    expect(wrapper.find(".list_wrap").exists());
    expect(props.getMovieList).toHaveBeenCalled();
    expect(wrapper.find(".list_wrap").find("li").length).toEqual(2);
  });

  it('current page number should be show', () => {
    expect(wrapper.find('.page_wrap').children('p').text()).toBe('2');
  });

  it('search button clicked', () => {
    wrapper.find('.btn').simulate('click');
    // $('.search_key').val('xujin');
    // $('.search_tag').val('girl');
    // expect(props.resetPage).toBeCalled();
  });

  it('page up button clicked', () => {
    wrapper.find('.page_up').simulate('click');
    expect(props.setPageUp).toBeCalled();
  });

  it('page down button clicked', () => {
    wrapper.find('.page_down').simulate('click');
    expect(props.setPageDown).toBeCalled();
  });

});




