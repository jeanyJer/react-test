'use strict';

/**
 * 错误处理
 *
 * @inner
 * @param {Object} response 返回的 JSON 数据
 * @return {Object}
 */
function errorHandler(response) {

    var code = response.code;

    if (code !== 0) {

        var msg = response.msg || '系统异常';
        alert('error', msg);
    }

    return response;
}
      
/**
 * 发送 post 请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @param {boolean} sync 是否是同步请求
 * @return {Promise}
 */
export function post (url, data={}, handler, sync) {
    return request(url, data, handler, sync, 'post');
}

/**
 * 发送请求
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @param {boolean} sync 是否是同步请求
 * @param {string} method get|post
 * @return {Promise}
 */
function request (url, data, handler, sync, method) {

    fetch(url, {  
            method: method,  
            headers: {  
              "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
            },  
            body: data 
        })  
        .then(  
            function(response) {  
                if (response.status !== 200) {  
                        alert('Looks like there was a problem. Status Code: ' +  
                  response.status);  
                    return;  
                }

              // Examine the text in the response  
                response.json().then(function(data) {  
                    alert(data);  
                });  
            }  
        )  
        .catch(function(err) {  
            alert('Fetch Error :-S', err);  
        });
}

/**
 * 发送 get 请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @param {boolean} sync 是否是同步请求
 * @return {Promise}
 */
export function get (url, data, handler, sync) {
    return request(url, data, handler, sync, 'get');
}



