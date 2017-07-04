
/******for dynamic components*****/

const initialState = {
 	tabNames:['tab_one', 'tab_two'],
 	currentIndex: 0
}

const currentIndex = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_TAB':
			return Object.assign({}, state, {
				currentIndex: action.index
			});
		default:
			return state;
	}
}

export default currentIndex