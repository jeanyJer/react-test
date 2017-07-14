import React from 'react';
import Loading from 'react-loading-animation';
import { getDetail } from '../../actions/request';

class MovieDetail extends React.Component{
  constructor(){
    super();
    this.state = {};
  }


  componentDidMount() {
    let param = {
      id: this.props.params.id
    };

    getDetail(param)
      .then((res) => {
        this.setState({
          detail: res
        });
        console.log('state', this.state);
      });
  }


  render() {
          let detail = this.state.detail;
          if (detail) {
            return (
                <div className="movie_detail">
                  <div className="clearfix">
                      <img src={detail.images.medium} className="left"/>
                      <div className="left info">
                        <p>
                          <label>{ '电影: ' }</label>
                          <span>{detail.title}</span>
                        </p>
                        <p>
                          <label>{ '类型: ' }</label>
                          <span>
                              {
                                detail.genres.map((elem) => {
                                  return elem
                                })
                              }
                          </span>
                        </p>
                        <p>
                          <label>{ '年份: ' }</label>
                          <span>
                              {detail.year}
                          </span>
                        </p>
                      </div>
                  </div>
                  <div className="summary">
                    <p>
                      <label>{ '评分: ' }</label>
                      <span>
                          {detail.rating.average}
                        </span>
                    </p>
                    <p>
                      <label>{ '观看次数: ' }</label>
                      <span>
                            {detail.collect_count}
                        </span>
                    </p>
                    <p>
                      <label>{ '评价次数: ' }</label>
                      <span>
                            {detail.comments_count}
                        </span>
                    </p>
                    <p>
                      <label>{ '简介: ' }</label>
                      <span>
                          {detail.summary}
                        </span>
                    </p>
                  </div>
                </div>
            )
          } else {
            return <Loading />
          }
        }
}

export default MovieDetail;

