import { connect } from 'react-redux';
import { setMovieList, setPageUp, setPageDown } from '../actions';
import MovieList from '../components/movie/movieList';

const mapStateToProps = (state) => {
  console.log('movieState', state);
  return {
    search: state.movieList.info,
    list: state.movieList.list,
    page: state.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBookList: (param) => {
      dispatch(setMovieList(param))
    },
    setPageUp: () => {
      dispatch(setPageUp())
    },
    setPageDown: () => {
      dispatch(setPageDown())
    }
  }
}

const VisibleMovieList = connect(mapStateToProps, mapDispatchToProps)(MovieList);

export default VisibleMovieList;

