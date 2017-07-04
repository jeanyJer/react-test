import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Tabs from './Tabs';

/******for dynamic components*****/
// const App = () => (
// 	<div>
// 		<Tabs />
// 	</div>
// )


const App = React.createClass({
  	render: function () {
	  	return (
	  		<div className="container">
				<header>
					<ul className="clearfix tabs_wrap">
						<li className="left">
							<Link to="/book" activeClassName="active" activeStyle={{color: '#c00'}}>图书</Link>
						</li>
						<li className="left">
							<Link to="/movie" activeClassName="active" activeStyle={{color: '#c00'}}>电影</Link>
						</li>
					</ul>
				</header>
				{ this.props.children }
			</div>
	  	)
  	}
})


export default 	App