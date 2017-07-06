
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

export default bookList