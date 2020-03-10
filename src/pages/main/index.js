import router from './router';
import store from './store';

export default {
  install(Vue, options = {}) {
    options.router.addRoutes(router);
    // 注册vuex模块
    options.store.registerModule('main', store);
  }
};