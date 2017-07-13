import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import MovieItem from './movieItem';

class MovieList extends React.Component{
  constructor(){
    super()
  }

  componentDidMount() {
      let param = {
          q: '张艺谋',
          tag: ''
      };
      this.props.getMovieList(param);
  }

  searchBooks() {
    let key = $.trim($('.search_key').val());
    let tag = $.trim($('.search_tag').val());

    if( key || tag) {
      let param = {
        q: key,
        tag: tag
      }
      this.props.getMovieList(param);
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
      this.props.getMovieList(param);
      this.props.setPageUp('movie');
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
      this.props.getMovieList(param);
      this.props.setPageDown('movie');
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

