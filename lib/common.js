var $ajax = axios.create({
  baseURL: 'http://127.0.0.1:8081',
  timeout: 2500 //在超时前，所有请求都会等待 2.5 秒
});