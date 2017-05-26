import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import welcome from '@/components/welcome'
import article from '@/components/article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: welcome
    },
    {
      path: '/posts/',
      name: 'posts',
      component: Posts
    },
    {
      path: '/article/:id',
      name: 'article',
      component: article
    }
  ]
})
