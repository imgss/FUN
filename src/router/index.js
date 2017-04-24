import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: Posts
    }
  ]
})
