import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/pages/index').default
    },
    {
      path: '/usermode/usermode',
      name: 'usermode',
      component: require('@/pages/usermode/usermode').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
