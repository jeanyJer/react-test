// __mocks__/request.js
import $ form 'jquery';

const bookInfos = {
    start: 0,
    count: 10,
    total: 30,
    books: [{
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
            }]
};

export default function getBooks(param) {
    console.log('this is mock service');
    return new Promise((resolve, reject) => {
        let q = $.trim(param.q);
        let tag = $.trim(param.tag);

        let isEmpty = q.length||tag.length ? true : false;

        process.nextTick(
            () =>  isEmpty ? resolve(bookInfos) : reject({
                error: 'User with key and tag value should not be empty.',
            })
        );
    });
}