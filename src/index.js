import LoadingApi from "./api";
//vue plugin
export const LoadingPlugin = {
  install(Vue, options = {}) {
    Vue.prototype.$vloading = LoadingApi(options);
  }
};

//function
export default LoadingApi;
