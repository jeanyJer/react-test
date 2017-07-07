import React from 'react';
import BookList from '../../../app/components/book/bookList';
import { mount } from 'enzyme';
import sinon from 'sinon';

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
      	setBookList: sinon.spy(),
      	setPageUp: sinon.spy(),
      	setPageDown: sinon.spy()
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
	});

	it('current page number should be show', () => {
		expect(wrapper.find('.page_wrap').children('p').text()).toBe('2');
	});

	it('search button clicked', () => {
		wrapper.find('.btn').simulate('click');

		// console.log('searchBooks', BookList.prototype.searchBooks);

		//jest.spyOn(BookList.prototype, 'searchBooks');
		
		//expect(BookList.prototype.searchBooks).toBeCalled();
		expect(props.setBookList).toBeCalled();
	});




});




