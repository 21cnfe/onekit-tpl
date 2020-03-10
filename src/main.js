import Vue from 'vue';
import { Config } from './config/index';
import '@21cnfe/ok';
// window.ok.debug = false;
Vue.config.productionTip = false;

// vui组件库
import {
  Flex,
  FlexItem,
  Button,
  Modal,
  Dialog,
  Toast,
  Icon,
  NavBar
} from '@21cnfe/vui';
Vue.component('Flex', Flex);
Vue.component('FlexItem', FlexItem);
Vue.component('Button', Button);
Vue.component('Modal', Modal);
Vue.component('Toast', Toast);
Vue.$Toast = Vue.prototype.$Toast = Toast;
Vue.$Modal = Vue.prototype.$Modal = Dialog;
Vue.component('NavBar', NavBar);
Vue.component('Icon', Icon);

// 图片懒加载
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.1,
  loading: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNgAAIAAAUAAen63NgAAAAASUVORK5CYII='
});

// axios封装引入
import axiosPlugin from "./service";
Vue.use(axiosPlugin);

if(Config.debug) {
  // console.log('打包时间：', process.env.BUILD_TIME);
  const VConsole = require('vconsole');
  new VConsole();
}