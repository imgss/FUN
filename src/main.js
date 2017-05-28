// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles.css'
import scrollIntoView from 'scroll-into-view'
import './assets/mdl.grey.orange.min.css'
import './assets/atom-one-dark.css'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
Vue.directive('view', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    el.addEventListener('click', event => {
      let select = event.target.innerHTML
      scrollIntoView(document.getElementById(select), {
        time: 500,
        align: {top: 0.2}
      })
      // document.getElementById(select).scrollIntoView()
    })
  }
})
Vue.directive('top', {
  // When the bound element is inserted into the DOM...
  inserted: function scroll (el, binding) {
    el.addEventListener('click', event => {
      console.log('click')
      let main = document.getElementsByTagName('main')[0]
      if (main.scrollTop === 0) {
        return
      } else {
        main.scrollTop = 0
      }
    })
  }
})
