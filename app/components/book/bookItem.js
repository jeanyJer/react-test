import React, { PropTypes } from 'react';

class BookItem extends React.Component{
	constructor(props){
        super(props)
    }

    render() {
    	let content = this.props.content;
    	return (
    			<li className="clearfix">
		            <img src={content.image} className="left"/>
		            <div className="right intro">
		                <p>
		                    <label>{ '书名: ' }</label>
		                    <span>{content.title}</span>
		                </p>
		                <p>
		                    <label>{ '作者: ' }</label>
		                    <span>
		                        {
		                            content.author.map((elem) => {
		                                return elem
		                            })
		                        }
		                    </span>
		                </p>
		                <p>
		                    <label>{ '标签: ' }</label>
		                    <span>
		                        { '暂无' }
		                    </span>
		                </p>
		                <p className="summary">
		                    <label>{ '简介: ' }</label>
		                    <span>
		                        {content.summary}
		                    </span>
		                </p>
		            </div>
		        </li>
    		)
    }

}


export default BookItem;