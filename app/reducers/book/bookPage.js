const currentBookPage = (state = 1, action) => {
  if (action.tag === 'book' ) {
      switch (action.type) {
        case 'PAGE_UP':
          return state - 1;
        case 'PAGE_DOWN':
          return state + 1;
        default:
          return state;
      }
  } else {
    return state;
  }

}

export default currentBookPage;
