/**
 * @filter API
 * @author xujin
 */

'use strict';

import {getJsonp} from '../service';


/**
 * 获取电影列表
 * @return {Promise}
 */
export function getMovies (param) {
  return getJsonp('https://api.douban.com/v2/movie/search', param);
}

/**
 * 获取图书列表
 * @return {Promise}
 */
export function getBooks (param) {
  return getJsonp('https://api.douban.com/v2/book/search', param);
}






