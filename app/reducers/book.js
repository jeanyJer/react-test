import { combineReducers } from 'redux';

const initSearchInfo = {
	searchInfo: {},
	list: []
};

const bookList = (state = initSearchInfo, action) => {
	switch (action.type) {
		case 'SET_BOOKS':
			let newState = {};
			let info = Object.assign({}, state.searchInfo, action.info.searchInfo);
			newState.searchInfo = info;
			newState.list = action.info.list;
			return newState;
		default:
			return state;
	}
}

const currentPage = (state = 1, action) => {
	switch (action.type) {
		case 'PAGE_UP':
			return state - 1;
		case 'PAGE_DOWN':
			return state + 1;
		default:
			return state
	}
}

const bookInfos = combineReducers({
  bookList,
  currentPage
})

export default bookInfos