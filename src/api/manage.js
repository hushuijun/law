import axios from 'axios'
// import { Toast } from 'mint-ui'
import router from '../router'

// 默认超时设置
// eslint-disable-next-line no-undef
axios.defaults.timeout = 50000
// 相对路径设置

// 根路径
const doMian = '39.106.213.243:8099'  // 服务器环境
// const doMian = '192.168.0.114:8099'  // 后台环境

axios.defaults.baseURL ='http://'+doMian

// http request 拦截器
// eslint-disable-next-line no-undef
axios.interceptors.request.use(
  config => {
    // 获取token
    //  const token = localStorage.getItem('token') // 请求完成确认取到token
    // 设置参数格式
    // if (!config.headers['Content-Type']) {
      config.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        // 'Access-Control-Allow-Headers': 'Content-Type, api_key, Authorization'
        // 'Access-Control-Allow-Origin': '*'
      }
    // }
    // 添加token到headers
    // if (token) {
    //   config.headers.token = token
    // }
    // 鉴权参数设置
    if (config.method === 'get') {
      // get请求下 参数在params中，其他请求在data中
      config.params = config.params || {}
      // let json = JSON.parse(JSON.stringify(config.params))
      // 一些参数处理
    } else {
      config.data = config.data || {}
      // 一些参数处理
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
// eslint-disable-next-line no-undef
axios.interceptors.response.use(
  response => {
    //
    // 一些统一code的返回处理
    if (response.data.code === 201) {
    // 登录验证
      // 做了个示例跳转项目中登录，并记录下相对路径
      router.push({
        name: 'login', // 从哪个页面跳转
        // query: {
        //   retUrl: window.location.href.split('#')[1] || '',
        //   is_new_user_url: 1
        // }
      })
    }
    if(response.data.code === 200){

    }else{
      // alert(response.data.message)
    }
    // if (response.data.code === 403) {
    //   Toast('wwoshi403')
    // }
    // if (response.data.code === 130) {
    //   Toast(response.data.message)
    // }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    axios.get(url, {
      params: params
    })
      .then(response => {
        // if (response.data.code === 0) {
          // 返回成功处理  这里传的啥 后续调用的时候 res就是啥
          resolve(response.data) // 我们后台所有数据都是放在返回的data里所以这里统一处理了
        // } else {
          // 错误处理
          // alert(response.data.message)
        // }
      })
      .catch(err => {
        reject(err)
        let message = '请求失败！请检查网络'
        // 错误返回
        if (err.response) message = err.response.data.message
        // alert(message)
      })
  })
}
/**
   * 封装post请求
   * @param url
   * @param data
   * @returns {Promise}
   */
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    axios.post(url, data)
      .then(response => {
        if (response.data.code === 0) {
          resolve(response.data)
        } else {
          // alert(response.data.msg)
        }
      }, err => {
        reject(err)
        let message = '请求失败！请检查网络'
        // eslint-disable-next-line keyword-spacing
        if(err.response) message = err.response.data.message
        // alert(message)
      })
  })
}
/**
   * 封装patch请求
   * @param url
   * @param data
   * @returns {Promise}
   */
export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    axios.patch(url, data)
      .then(response => {
        if (response.data.code === 200) {
          resolve(response.data)
        } else {
          // alert(response.data.msg)
        }
      }, err => {
        reject(err)
        let message = '请求失败！请检查网络'
        if (err.response) message = err.response.data.message
        // alert(message)
      })
  })
}
/**
   * 封装put请求
   * @param url
   * @param data
   * @returns {Promise}
*/
export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    axios.put(url, data)
      .then(response => {
        if (response.data.code === 200) {
          resolve(response.data)
        } else {
          // alert(response.data.msg)
        }
      }, err => {
        reject(err)
        let message = '请求失败！请检查网络'
        if (err.response) message = err.response.data.message
        // alert(message)
      })
  })
}
export function del (url, data = {}) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    axios.delete(url, data)
      .then(response => {
        if (response.data.code === 200) {
          resolve(response.data.data)
        } else {
          // alert(response.data.msg)
        }
      }, err => {
        reject(err)
        let message = '请求失败！请检查网络'
        if (err.response) message = err.response.data.message
        // alert(message)
      })
  })
}
export {

  
  doMian
}