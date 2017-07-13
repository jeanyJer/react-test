const initSearchInfo = {
	info: {},
	list: []
};

const bookList = (state = initSearchInfo, action) => {
	switch (action.type) {
		case 'SET_BOOKS':
			let newState = {};
			let info = Object.assign({}, state.searchInfo, action.bookInfo.info);
			newState.info = info;
			newState.list = action.bookInfo.list;
			return newState;
		default:
			return state;
	}
}

export default bookList
