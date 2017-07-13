import { connect } from 'react-redux';
import { setBookList, setPageUp, setPageDown } from '../actions';
import BookList from '../components/book/bookList';

const mapStateToProps = (state) => {
    console.log('bookState', state);
    return {
      search: state.bookList.info,
      list: state.bookList.list,
      page: state.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBookList: (param) => {
            dispatch(setBookList(param))
        },
        setPageUp: () => {
            dispatch(setPageUp())
        },
        setPageDown: () => {
            dispatch(setPageDown())
        }
    }
}

const VisibleBookList = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default VisibleBookList;

