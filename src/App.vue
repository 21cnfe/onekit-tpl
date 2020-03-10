<template>
  <div id="app">
    <keep-alive :include="keepAliveInclude" :exclude="keepAliveExclude">
      <router-view class="page-view" ref="pageView" v-lazy-container="{selector:'.lazy'}"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { keepAliveInclude, keepAliveExclude } from './config/keepAlive.js';

export default {
  name: 'App',
  data() {
    return {
      keepAliveInclude,
      keepAliveExclude,
      routerOpts: {
        // 缓存上一次路由to对象
        to: {},
        // 缓存上一次路由from对象
        from: {},
        // 滚动位置缓存
        scrollPositionCache: {}
      }
    };
  },
  watch: {
    '$route'(to, from) {
      this.recordScrollPosition(to, from);
    }
  },
  mounted() {
    this.initScrollPosition();
  },
  methods: {
    // 初始化滚动位置缓存对象
    initScrollPosition() {
      // 根据keepAlive配置，初始化需要记录滚动位置的集合
      var keepAliveIncludeList = this.keepAliveInclude.split(',');
      for(var i = 0, len = keepAliveIncludeList.length; i < len; i++) {
        this.routerOpts.scrollPositionCache[keepAliveIncludeList[i]] = [];
      }
    },
    // 恢复滚动位置
    restoreScrollPosition() {
      if (this.routerOpts.scrollPositionCache[this.routerOpts.to.name] && this.routerOpts.scrollPositionCache[this.routerOpts.to.name].length > 0) {
        this.routerOpts.scrollPositionCache[this.routerOpts.to.name].forEach(item => {
          if(item.direction === 'vertical') {
            item.el.scrollTop = item.position;
          }else{
            item.el.scrollLeft = item.position;
          }
        });
      }
    },
    // 记录滚动位置
    recordScrollPosition(to, from) {
      this.routerOpts.to = to;
      this.routerOpts.from = from;

      if (this.routerOpts.scrollPositionCache[from.name]) {
        // 默认缓存当前显示的容器滚动位置
        this.routerOpts.scrollPositionCache[from.name] = [{
          el: this.$refs.pageView.$el,
          direction: 'vertical',
          position: this.$refs.pageView.$el.scrollTop
        }];
        var scrollContainer = this.$refs.pageView.$el.querySelectorAll && this.$refs.pageView.$el.querySelectorAll('.scroll-container');
        if(scrollContainer && scrollContainer.length > 0) {
          // 存在子滚动容器，遍历并缓存滚动容器、滚动方向、滚动位置
          // el-滚动容器dom元素
          // direction-滚动方向，横向-horizon，竖向-vertical，默认为vertical
          // position-滚动位置，滚动滚动方向记录scrollTop或scrollLeft
          var direction;
          var position;
          scrollContainer.forEach(item => {
            direction = item.getAttribute('data-direction') || 'vertical';
            position = direction === 'vertical' ? item.scrollTop : item.scrollLeft;
            this.routerOpts.scrollPositionCache[from.name].push({
              el: item,
              direction: direction,
              position: position
            });
          });
        }
      }
    }
  }
};
</script>

<style lang="scss">
@import '../node_modules/@21cnfe/vui/dist/styles/vui.css';
@import './assets/styles/common.scss';
</style>
