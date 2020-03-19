import axios from "axios";
import qs from 'qs'

// 退出登录
function goLogin() {
  localStorage.removeItem("userRole");
  sessionStorage.removeItem("token");
}

// 创建axios实例
const service = axios.create({
  // timeout: 2000,
  transformRequest: [function(data, config) {
    // 对 data 进行任意转换处理
    if (config['Content-Type'] && config['Content-Type'].indexOf('multipart/form-data') > -1) {
      return data
    } else {
      return qs.stringify(data, config)
    }
  }]
})

// request拦截器
service.interceptors.request.use(
  config => {
    // if (Storage.get('userInfo')) {}
    config.headers.get['Content-Type'] = 'application/json;charset=utf-8'
    return config
  },
  error => {
    // console.log(error)
    return Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    if (response.data.status === '10000') {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data);
    }
  },
  error => {
    if (error.response.status === 503) {
      goLogin();
    }
    return Promise.reject(error);
  }
);

export default service;