// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles.css'
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
    // Focus the element
    el.addEventListener('click', event => {
      let select = event.target.innerHTML
      console.log(`#${select}`, document.getElementById(select))
      document.getElementById(select).scrollIntoView()
    })
  }
})
