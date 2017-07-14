import { connect } from 'react-redux';
import { getBookList, setPageUp, setPageDown, resetPage } from '../actions';
import BookList from '../components/book/bookList';

const mapStateToProps = (state) => {
    console.log('bookState', state);
    return {
      search: state.bookList.info,
      list: state.bookList.list,
      page: state.currentBookPage
    }
}


const VisibleBookList = connect(mapStateToProps, { getBookList, setPageUp, setPageDown, resetPage })(BookList);

export default VisibleBookList;

