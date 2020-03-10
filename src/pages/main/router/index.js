export default [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('../home/Index.vue')
    },
    meta: {
      pageTitle: '首页',
      shareTitle: '首页',
      shareDesc: '首页',
      shareImg: ''
    }
  }
];