import React, { PropTypes } from 'react';

class MovieItem extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    let content = this.props.content;
    return (
      <li className="clearfix">
        <img src={content.images.medium} className="left"/>
         <div className="right intro">
          <p>
            <label>{ '电影: ' }</label>
            <span>{content.title}</span>
          </p>
          <p>
            <label>{ '导演: ' }</label>
            <span>
                  {
                    content.genres.map((elem) => {
                      return elem
                    })
                  }
              </span>
          </p>
          <p>
            <label>{ '年份: ' }</label>
            <span>
                {content.year}
            </span>
          </p>
          <p className="summary">
            <label>{ '评分: ' }</label>
            <span>
                {content.rating.average}
            </span>
          </p>
          <p>
            <label>{ '观看次数: ' }</label>
            <span>
                {content.collect_count}
            </span>
          </p>
        </div>
      </li>
    )
  }

}


export default MovieItem;
