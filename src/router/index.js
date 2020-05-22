import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout
    },
    {
      path: '/template',
      name: 'template',
      component: layout,
      meta: {
        title: '常用模板'
      },
      children: [
        {
          name: 'tableList',
          path: 'tableList',
          component: () => import('@/views/table/tableList'),
          meta: {
            title: '常规表格'
          }
        }
      ]
    }
  ]
})
