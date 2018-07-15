import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/pages/Posts'
import welcome from '@/pages/welcome'
import resume from '@/pages/resume'
const Article = resolve => require(['@/pages/article'], resolve)
Vue.use(Router)

export default new Router({
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
      component: Article
    },
    {
      path: '/tags',
      component: Posts
    },
    {
      path: '/resume',
      component: resume
    }
  ]
})
