import { getMovies, getBooks} from './request';

const setBookList = (bookInfo) => ({
    type: 'SET_BOOKS',
    bookInfo
})

export const setPageUp = (tag) => ({
	  type: 'PAGE_UP',
    tag
})

export const setPageDown = (tag) => ({
	  type: 'PAGE_DOWN',
    tag
})

export const resetPage = (tag) => ({
  type: 'PAGE_RESET',
  tag
})

const setMovieList = (movieInfo) => ({
    type: 'SET_MOVIES',
    movieInfo
})


export const getBookList = (param) => {
  return (dispatch) => {
    let newMovieInfo = {};
    getBooks(param)
      .then((res) => {
        let temp = {
          count: res.count,
          start: res.start,
          total: res.total
        };
        let info = Object.assign({}, param, temp);
        newMovieInfo.info = info;
        newMovieInfo.list = res.books;
        dispatch(setBookList(newMovieInfo));
      });
  }
}

export const getMovieList = (param) => {
  return (dispatch) => {
    let newMovieInfo = {};
    getMovies(param)
      .then((res) => {
        let temp = {
            count: res.count,
            start: res.start,
            total: res.total
        };
        let info = Object.assign({}, param, temp);
        newMovieInfo.info = info;
        newMovieInfo.list = res.subjects;
        dispatch(setMovieList(newMovieInfo));
      });
  }
}

