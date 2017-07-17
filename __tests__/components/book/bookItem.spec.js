import React from 'react';
import BookItem from '../../../app/components/book/bookItem';
import { mount } from 'enzyme';

const setup = () => {
    let props = {
        content: {
            author: ['徐瑾'],
            image: "https://img3.doubanio.com/mpic/s1528053.jpg",
            summary:"本书是《全国注册安全工程师执业资格考试精题精练》系列图书之一。",
            tags: [],
            title: "安全生产法规与安全生产管理"
        }
    };
    let wrapper = mount(<BookItem {...props} />);
    return {
        props,
        wrapper
    }
}


describe('This is a test for bookItem component', () => {
    const { props, wrapper } = setup();

    it('BookItem component should be render', () => {
        expect(wrapper.find(".summary").exists());
    });

    it('summary content should be show', () => {
        expect(wrapper.find(".summary").find('span').text()).toContain('全国注册安全工程师执业资格考试精题精练');
    });

});




