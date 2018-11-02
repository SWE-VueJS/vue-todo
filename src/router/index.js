import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import Component02 from '@/components/Component02'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/TodoList',
      name: 'todolist',
      component: TodoList
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
