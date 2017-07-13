
const currentPage = (state = 1, action) => {
	switch (action.type) {
		case 'PAGE_UP':
			return state - 1;
		case 'PAGE_DOWN':
			return state + 1;
		default:
			return state
	}

export default currentPage;
