<template>
<div class='mdl-layout__container'>
    <div class="demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded">
      <main class="mdl-layout__content">
          <div class='demo-blog__posts mdl-grid'>
              <div class="mdl-card mdl-cell mdl-cell--12-col" v-for='card in articles'>
                <router-link :to="card.id">
                  <div class="mdl-card__title title mdl-card__media mdl-color-text--grey-50">{{card.title}}</div>
                </router-link>
                <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">{{card.text}}</div>
                <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">{{card.postDate}}</div>
              </div>
          </div>
    </main>
  </div>
</div>
</template>

<script>
import axios from 'axios'
// import {
//   mapState,
//   mapGetters,
//   mapMutations
// } from 'vuex'
export default {
  data () {
    return {
      articles: []
    }
  },
  created () {
    console.log(this.$route.query)
    if (!Object.keys(this.$route.query).length) {
      this.getPages()
    } else {
      this.getPagesOfTag()
    }
  },
  methods: {
    getPages () {
      axios.get(`https://raw.githubusercontent.com/imgss/mdblog/master/posts/index.json`).then((data) => {
        this.articles = data.data.values
        this.$store.commit('saveArticles', data.data.values)
      })
    },
    getPagesOfTag () {
      let tag = this.$route.query.tag
      console.log(tag)
      this.articles = this.$store.state.articles.filter(article => {
        if (article.tags.indexOf(tag) !== -1) {
          return article
        }
      })
    }
  }
}

</script>

<style scoped lang='stylus'>
.mdl-layout__container
  background: #eeeeee
  background-size: cover
  background-repeat: no-repeat
.title
  font-size: 34px
.mdl-cell
  box-shadow: 3px 3px 7px #aaa
.posts
  display: flex
  justify-content: center
  width: 100%

</style>
