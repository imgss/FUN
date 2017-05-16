import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import welcome from '@/components/welcome'
import article from '@/components/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: Posts
    },
    {
      path: '/posts/',
      name: 'posts',
      component: welcome
    },
    {
      path: '/article/',
      name: 'article',
      component: article
    }
  ]
})
