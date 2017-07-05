import React from 'react';
import { connect } from 'react-redux';
import { setBookList } from '../../actions';
import { getBookList } from './request';
import bookItem from './book';

export class bookContent extends React.Component{
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
                newBookInfo.bookList = res.books;
                this.props.setBookList(newBookInfo);
            });
    }

    render() {
        return (
            <ul className="list_wrap">
                {
                    this.props.list.map((item, index) => {
                        console.log(item);

                        return 
                            <bookItem key={index} content={item} />
                        
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
      search: state.searchInfo,
      list: state.bookList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBookList: (param) => {
            
            dispatch(setBookList(param))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(bookContent)
