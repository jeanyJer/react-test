import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import routes from './routes/index';
import App from './components/App';
import VisibleBookList from './containers/visibleBookList';
import VisibleMovieList from './containers/visibleMovieList';
import MovieDetail from './components/movie/movieDetail';

//根据reducer创建一个store
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
		    <Route path="/" component={App}>
		    	  <IndexRoute component={VisibleBookList} />
		      	<Route path="book" component={VisibleBookList} />
		      	<Route path="movie" component={VisibleMovieList} />
            <Route path="movie_detail/:id" component={MovieDetail} />
		    </Route>
  		</Router>
	</Provider>,
  document.getElementById('root')
);
