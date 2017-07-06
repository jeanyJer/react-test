import { combineReducers } from 'redux';
import bookList from './book/bookList';
import currentPage from './book/bookPage';


const library = combineReducers({
  bookList,
  currentPage
});

 export default library;