import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import routes from '../routerConfig';
import store from '../store';

Vue.use(VueRouter);

var router = new VueRouter({ routes });

// 通用路由守卫
import navigationGuards from './navigationGuards';
Vue.use(navigationGuards, { router });

// 将 vue-router 的 $route 同步至 vuex
sync(store, router);

export default router;