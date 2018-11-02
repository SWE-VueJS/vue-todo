import Vue from 'vue'
import Router from 'vue-router'
import Component01 from '@/components/Component01'
import Component02 from '@/components/Component02'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Component01',
      name: 'cpn01',
      component: Component01
    },
    {
      path: '/Component02',
      name: 'cpn02',
      component: Component02
    },
     {
      path: '/User',
      name: 'user',
      component: User
    }
  ]
})
