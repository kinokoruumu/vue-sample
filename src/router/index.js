import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../components/TodoList.vue'
import Counter from '../components/Counter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/counter',
      component: Counter
    }
  ]
})
