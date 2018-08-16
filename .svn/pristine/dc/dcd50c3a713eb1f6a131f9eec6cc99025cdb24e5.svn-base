import store from '../store/index.js'
import axios from 'axios';

// 给axios扩展一个'ajax'方法,用于代理'get'请求;
axios.ajax = function (url, args) {
    url = 'http://120.76.200.217:7080'+url;
    return axios.get(url, {
        params: {
            ...args
        },
        headers: {
            'token': store.state.token
        }
    }).then(res => {
        if (res.data.code !== 200) { //服务端返回的状态码不是200时
            console.error(`Api:${url}, code: ${res.data.code}, msg: ${res.data.msg}`);
        }
        return res.data;
    }).catch(res => { // http请求本身出错时
        console.error(`http请求出错: Api:${url}  ${res}`);
        return {
            code: 1000,
            msg: res
        }
    })
}

// 给axios扩展一个可以取消的'cajax'方法;
axios.cajax = function (url, args) {
    console.log('打印store',store.state.token)
    url = 'http://120.76.200.217:7080'+url;
    let cancel = null;
    let promise = axios.get(url, {
        cancelToken: new axios.CancelToken(c => cancel = c),
        params: {
            ...args
        },
        headers: {
            'token': store.state.token
        }
    }).then(res => {
        if (res.data.code !== 200) { //服务端返回的状态码不是200时
            console.error(`Api:${url}, code: ${res.data.code}, msg: ${res.data.msg}`);
        }
        return res.data;
    }).catch(res => {
        if (axios.isCancel(res)) { // http请求被取消时
            console.log(`Api请求被取消: ${url}',  取消说明: ${res.message || "无取消说明..."}`);
            return {
                code: 1001,
                msg: `${res.message || "请求被取消"}`
            };
        } else { // http请求本身出错时
            console.error(`http请求出错: Api:${url}  ${res}`);
            return {
                code: 1000,
                msg: res
            }
        }
    })
    promise.cancel = cancel;
    return promise;
}

export default axios;