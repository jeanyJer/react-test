import { combineReducers } from 'redux';
import bookList from './book/bookList';
import currentBookPage from './book/bookPage';
import currentMoviePage from './movie/moviePage';
import movieList from './movie/movieList';


const library = combineReducers({
  bookList,
  movieList,
  currentBookPage,
  currentMoviePage
});

 export default library;
