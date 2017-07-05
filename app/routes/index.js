export default {
  path: '/',

  component: require('../components/App').default,
  
  childRoutes: [
    {
      path: 'book',
      component: require('../components/book/bookList').default
    },
    {
      path: 'movie',
      component: require('../components/movie/index').default
    }
  ]
}

/*
  当前路由树如下
  ├ /
  ├ /book
  ├ /movie
  ├ 
*/
