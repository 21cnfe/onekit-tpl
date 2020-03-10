import axios from 'axios';
import qs from 'qs';
import { Config } from '../config';

// 请求超时时间
const timeOut = 20000;
const Axios = axios.create({
    timeout: timeOut,
    baseURL: Config.domain.api,
    headers: {
        Accept: 'application/json;charset=UTF-8'
    }
});

// 格式化参数
const formatParams = params => Object.entries(params)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .concat(`v=${Math.random()}`.replace('.', ''))
    .join('&')

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            config.data = qs.stringify(config.data);
        }
        
        return config;
    },
    err => Promise.reject(err)
);

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
    res => Promise.resolve(res.data),
    err => Promise.reject(err)
);

Axios.jsonp = (url, params) => new Promise((resolve, reject) => {
    params.noCache = Math.random();
    jsonp({
        url: url,
        callback: params.callback || "jsoncallback",
        data: params,
        time: 10000,
        success(data) {
            data = typeof data === 'string' ? JSON.parse(data) : data;
            data.status == 0 ? resolve(data) : reject(data);
        },
        fail(err) {
            reject(err);
        }
    });
});


function jsonp(options) {
    // 没有传入参数时，未空对象并报错
    options = options || {};
    if (!options.url || !options.callback) throw new Error("参数不合法");

    // 创建 script 标签并加入到页面中
    var callbackName = ('jsonp_' + Math.random()).replace(".", "");
    var oHead = document.getElementsByTagName('head')[0];
    options.data[options.callback] = callbackName;
    var params = formatParams(options.data);
    var oS = document.createElement('script');
    oHead.appendChild(oS);

    // 创建jsonp回调函数
    window[callbackName] = function (json) {
        // 移除script标签
        oHead.removeChild(oS);
        clearTimeout(oS.timer);
        window[callbackName] = null;
        // 传给success
        options.success && options.success(json);
    };

    // 发送请求
    oS.src = options.url + '?' + params;

    // 超时处理
    if (options.time) {
        oS.timer = setTimeout(function () {
            window[callbackName] = null;
            oHead.removeChild(oS);
            options.fail && options.fail({ message: "超时" });
        }, options.time);
    }
}

export const $http = Axios;

export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, "$http", { value: Axios });
    }
};