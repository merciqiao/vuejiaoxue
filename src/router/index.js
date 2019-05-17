import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
     {
      name:'login',
      path: '/login',
      component: () => import('@/components/login.vue'),
      meta: { title: '登录页' }
    },
    {
      path: '/home',
      component: () => import('@/components/common/Home'),
      meta: {
        title: '自述文件'
      },
      children:[
        {
          path: '/index',
          name: '系统首页',
          component: () => import('@/components/test/HelloWorld'),
          meta: {
            title: '系统首页',
            hideclose:true
          }
        },
         {
          path: '/test01',
          name: 'test01',
          component: () => import('@/components/test/test01'),
          meta: {
            title: 'test01页'
          }
        },
        {
          path: '/tablepage',
          name: 'tablepage',
          component: () => import('@/components/tablepage/tablepage'),
          meta: {
            title: 'tablepage页'
          }
        },
      ]
    },
    {
      name:'404',
      path: '/404',
      component: () => import('@/components/common/404.vue'),
      meta: { title: '路由不存在' }
    },
    {
      name:'403',
      path: '/403',
      component: () => import('@/components/common/403.vue'),
      meta: { title: '资源不可访问' }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
  mode:'history'
})
