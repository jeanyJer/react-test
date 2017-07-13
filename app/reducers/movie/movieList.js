const initSearchInfo = {
  info: {},
  list: []
};

const movieList = (state = initSearchInfo, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      let newState = {};
      let info = Object.assign({}, state.info, action.movieInfo.info);
      newState.info = info;
      newState.list = action.movieInfo.list;
      return newState;
    default:
      return state;
  }
}

export default movieList;
