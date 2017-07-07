import React from 'react';
import { connect } from 'react-redux';
import { setBookList, setPageUp, setPageDown } from '../../actions';
import { getBookList } from './request';
import BookItem from './bookItem';
import $ from 'jquery';

class BookList extends React.Component{
    constructor(){
        super()
    }

    componentWillMount() {
        let param = {
            q: '图书',
            tag: ''
        };
        this.getBookList(param);
    }

    getBookList(param) {
        let newBookInfo = {};
        getBookList(param)
            .then((res) => {
                let temp = {
                    count: res.count,
                    start: res.start,
                    total: res.total
                };
                let info = Object.assign({}, param, temp);

                newBookInfo.searchInfo = info;
                newBookInfo.list = res.books;
                this.props.setBookList(newBookInfo);
            });
    }

    searchBooks() {
        let key = $('.search_key').val();
        let tag = $('.search_tag').val();

        if( key || tag) {
            let param = {
                q: key,
                tag: tag
            }
            this.getBookList(param);
        }
    }

    PageUp() {
        let props = this.props;
        let info = props.search;
        if (props.page > 1) {
            let param = {
                q: info.q,
                tag: info.tag,
                start: info.start - info.count
            };
            this.getBookList(param);
            props.setPageUp();
        }
    }

    PageDown() {
        let props = this.props;
        let info = props.search;
        if (props.page * info.count < info.total) {
            let param = {
                q: info.q,
                tag: info.tag,
                start: info.start + info.count
            };
            this.getBookList(param);
            props.setPageDown();
        }
    }


    render() {
        return (
            <div>
                <div className="search_wrap clearfix">
                    <div className="left">
                        <label>{ '关键字:' }</label>
                        <input className="search_key" />
                    </div>
                    <div className="left">
                        <label>{ 'tag:' }</label>
                        <input className="search_tag" />
                    </div>
                    <button className="btn left" onClick={ () => { this.searchBooks() } }>{ '搜索' }</button>
                </div>
                <ul className="list_wrap">
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <BookItem key={index} content={item} />
                            )
                        })
                    }
                </ul>
                <div className="page_wrap"> 
                    <span className="page_up" onClick={ () => { this.PageUp() }}>{'<'}</span>
                    <p>{ this.props.page }</p>
                    <span className="page_down" onClick={ () => { this.PageDown() }}>{'>'}</span>
                </div>
            </div>
        );
    }
}

export default BookList;

