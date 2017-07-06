import React from 'react';
import BookList from '../../../app/components/book/bookList';
import { shallow } from 'enzyme';

const setup = () => {
	const props = {
		search: {
			q: '图书',
            tag: '英语',
            start: 0,
            count: 10,
            total: 100
		},
      	list: [
      		{
				author: [],
				image: "https://img3.doubanio.com/mpic/s1528053.jpg",
				summary:"本书是《全国注册安全工程师执业资格考试精题精练》系列图书之一。",
				tags: [],
				title: "安全生产法规与安全生产管理"
      		},{
      			author: [],
				image: "https://img3.doubanio.com/mpic/s1528053.jpg",
				summary:"本书是《全国注册安全工程师执业资格考试精题精练》系列图书之一。",
				tags: [],
				title: "安全生产法规与安全生产管理"
      		}
      	],
      	page: 1,
      	setBookList: jest.fn(),
      	setPageUp: jest.fn(),
      	setPageDown: jest.fn()
	};
	const wrapper = shallow(<BookList {...props} />);
	return {
		props,
		wrapper
	}
}

describe('This is a test for bookList component', () => {
	const { props, wrapper } = setup();

	

	it('BookList component should be render', () => {
		expect(wrapper.find(".list_wrap").exists());
	});
});