import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/main';

// 页面模块化，可在模块内添加路由、vuex模块
import main from '@/pages/main';
Vue.use(main, {
    store,
    router
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');