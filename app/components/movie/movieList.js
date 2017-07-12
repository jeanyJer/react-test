import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { getMovies } from './request';
import MovieItem from './movieItem';

class MovieList extends React.Component{
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
    let newMovieInfo = {};
    getMovies(param)
      .then((res) => {
        /* istanbul ignore next */
        let temp = {
          count: res.count,
          start: res.start,
          total: res.total,
          query: res.query,
          tag: res.tag
        };
        /* istanbul ignore next */
        let info = Object.assign({}, temp);
        /* istanbul ignore next */
        newMovieInfo.searchInfo = info;
        /* istanbul ignore next */
        newMovieInfo.list = res.subjects;
        /* istanbul ignore next */
        this.props.setMovieList(newMovieInfo);
      });
  }

  searchBooks() {
    let key = $.trim($('.search_key').val());
    let tag = $.trim($('.search_tag').val());

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
                <MovieItem key={index} content={item} />
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

export default MovieList;

