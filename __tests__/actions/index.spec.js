import * as actions from '../../app/actions/index';

describe('actions test', () => {
  it('should create setChangeTab an action', () => {
    const index = 2
    const expectedAction = {
      type: 'CHANGE_TAB',
      index
    }
    expect(actions.setChangeTab(index)).toEqual(expectedAction)
  });

  it('should create setBookList an action', () => {
    const info = {
    	tag: "book"
    };
    const expectedAction = {
      type: 'SET_BOOKS',
      info
    }
    expect(actions.setBookList(info)).toEqual(expectedAction)
  });

  it('should create setPageUp an action', () => {
    const expectedAction = {
      type: 'PAGE_UP'
    }
    expect(actions.setPageUp()).toEqual(expectedAction)
  });

  it('should create setPageDown an action', () => {
    const expectedAction = {
      type: 'PAGE_DOWN'
    }
    expect(actions.setPageDown()).toEqual(expectedAction)
  });

})
