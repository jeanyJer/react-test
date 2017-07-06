import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import routes from './routes/index';
import App from './components/App';
import VisibleBookList from './containers/visibleBookList';
import movieContent from './components/movie/index';

//根据reducer创建一个store
const store = createStore(reducer)

/******for dynamic components*****/
// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
		    <Route path="/" component={App}>
		    	<IndexRoute component={VisibleBookList} />
		      	<Route path="book" component={VisibleBookList}/>
		      	<Route path="movie" component={movieContent}/>
		    </Route>
  		</Router>
	</Provider>,
  document.getElementById('root')
);