import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  current: 0,
  articles: null,
  tags: null
}
let getters = {
  nextArticle: state => {
    let next = state.current + 1
    if (next < state.articles.length) {
      return state.articles[next]
    } else {
      return state.article[0]
    }
  }
}

let actions = {
}
let mutations = {
  saveArticles (state, articles) {
    state.articles = articles
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
