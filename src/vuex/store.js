import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
function sessionState () {
  return JSON.parse(sessionStorage.getItem('state'))
}
const state = {
  current: 0,
  colors: [],
  articles: null,
  tags: null
}
let getters = {
  nextArticle: state => {
    let next = state.current + 1
    try {
      if (next < state.articles.length) {
        return state.articles[next]
      } else {
        return state.articles[0]
      }
    } catch (err) {
      let state = sessionState()
      if (next < state.articles.length) {
        return state.articles[next]
      } else {
        return state.articles[0]
      }
    }
  },
  prevArticle: state => {
    if (state.current === 0) {
      try {
        return state.articles[state.articles.length - 1]
      } catch (err) {
        let state = sessionState()
        return state.articles[state.articles.length - 1]
      }
    } else {
      try {
        return state.articles[state.current - 1]
      } catch (err) {
        let state = sessionState()
        return state.articles[state.current - 1]
      }
    }
  },
  currentColor: state => {
    try {
      return state.colors[state.current] || '#' + Math.random().toString(16).slice(2, 8)
    } catch (err) {
      let state = sessionState()
      return state.colors[state.current]
    }
  },
  dates: state => {
    return state.articles.map(article => article.postDate)
  }
}

let actions = {
}
let mutations = {
  saveArticles (state, articles) {
    state.articles = articles
    sessionStorage.setItem('state', JSON.stringify(state))
  },
  saveTags (state, tags) {
    state.tags = tags
    sessionStorage.setItem('state', JSON.stringify(state))
  },
  saveColors (state, colors) {
    state.colors = colors
    sessionStorage.setItem('state', JSON.stringify(state))
  },
  setCurrent (state, currentId) {
    if (typeof currentId === 'number') {
      state.current = currentId
    } else {
      let articles = state.articles || sessionState().articles
      let len = articles.length
      for (let i = 0; i < len; i++) {
        if (articles[i].id === currentId) {
          state.current = i
          return
        }
      }
    }
    sessionStorage.setItem('state', JSON.stringify(state))
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
