/**
 * @filter API
 * @author xujin
 */

'use strict';

import {postJsonp, getJsonp} from '../../service';


/**
 * 获取图书列表
 * @return {Promise}
 */
export function getBooks (param) {
	return getJsonp('https://api.douban.com/v2/book/search', param);
}








