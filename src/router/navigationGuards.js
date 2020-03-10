export default {
  install(Vue, options = {}) {
    // 设置分享信息
    options.router.afterEach((to) => {
      // window.ok.showShareMenu(to.meta.shareTitle, to.meta.shareDesc, to.meta.shareImg);
    });
  }
};