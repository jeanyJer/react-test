import React from 'react';
import BookList from '../../../app/components/book/bookList';
import { mount } from 'enzyme';

const setup = () => {
	const props = {
		search: {
			q: '图书',
            tag: '英语',
            start: 10,
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
      	page: 2,
      	setBookList: jest.fn(),
      	setPageUp: jest.fn(),
      	setPageDown: jest.fn()
	};
	const wrapper = mount(<BookList {...props} />);
	return {
		props,
		wrapper
	}
}



describe('This is a test for bookList component', () => {
	const { props, wrapper } = setup();

	it('BookList component should be render', () => {
		expect(wrapper.find(".list_wrap").exists());
		expect(wrapper.find(".list_wrap").find("li").length).toEqual(2);
	});

	it('current page number should be show', () => {
		expect(wrapper.find('.page_wrap').children('p').text()).toBe('2');
	});

	it('search button clicked', async () => {
	 	wrapper.find('.btn').simulate('click');

	 	let param = {
	  		q: props.q,
	  		tag: props.tag
	  	};

	  	await BookList.prototype.getBookList(param);

	 	jest.spyOn(BookList.prototype, 'getBookList');
		//expect(BookList.prototype.getBookList).toBeCalled();
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




