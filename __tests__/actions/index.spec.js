import * as actions from '../../app/actions/index';

describe('actions test', () => {

  it('should create setBookList an action', () => {
    let bookInfo = {
    	tag: "book"
    };
    let expectedAction = {
      type: 'SET_BOOKS',
      bookInfo
    }
    expect(actions.setBookList(bookInfo)).toEqual(expectedAction)
  });

  it('should create setMovieList an action', () => {
    let movieInfo = {
      tag: "book"
    };
    let expectedAction = {
      type: 'SET_MOVIES',
      movieInfo
    }
    expect(actions.setMovieList(movieInfo)).toEqual(expectedAction)
  });

  it('should create setPageUp an action', () => {
    let tag = 'book';
    let expectedAction = {
      type: 'PAGE_UP',
      tag
    }
    expect(actions.setPageUp(tag)).toEqual(expectedAction)
  });

  it('should create setPageDown an action', () => {
    let tag = 'book';
    let expectedAction = {
      type: 'PAGE_DOWN',
      tag
    }
    expect(actions.setPageDown(tag)).toEqual(expectedAction)
  });

  it('should create resetPage an action', () => {
    let tag = 'book';
    let expectedAction = {
      type: 'PAGE_RESET',
      tag
    }
    expect(actions.resetPage(tag)).toEqual(expectedAction)
  });

})
