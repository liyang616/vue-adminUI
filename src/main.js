// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 路由进度条nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/common.less'
Vue.use(ElementUI)

// nprogress配置
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
// 路由监听
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
