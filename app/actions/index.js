export const setBookList = (bookInfo) => ({
    type: 'SET_BOOKS',
    bookInfo
})

export const setPageUp = () => ({
	  type: 'PAGE_UP'
})

export const setPageDown = () => ({
	  type: 'PAGE_DOWN'
})

export const setMovieList = (movieInfo) => {
    type: 'SET_MOVIES',
    movieInfo
}
