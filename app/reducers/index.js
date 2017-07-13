import { combineReducers } from 'redux';
import bookList from './book/bookList';
import movieList from './book/movieList';
import currentPage from './book/bookPage';


const library = combineReducers({
  bookList,
  movieList,
  currentPage
});

 export default library;
