import { connect } from 'react-redux';
import { setPageUp, setPageDown, getMovieList } from '../actions';
import MovieList from '../components/movie/movieList';

const mapStateToProps = (state) => {
  console.log('movieState', state);
  return {
    search: state.movieList.info,
    list: state.movieList.list,
    page: state.currentMoviePage
  }
}


const VisibleMovieList = connect(mapStateToProps, {setPageUp, setPageDown, getMovieList })(MovieList);

export default VisibleMovieList;

