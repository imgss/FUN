<template>
<div class='mdl-layout__container'>
    <div class="demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded">
      <main class="mdl-layout__content">
          <div class='demo-blog__posts mdl-grid tagWrapper'>
            <tagcloud  class='mdl-card mdl-cell mdl-cell--8-col mdl-cell--4-col-desktop' width='200' height='200' r='80' @tagClick='getPagesOfTag' :tags='tags' v-if='!this.$route.query.tag'></tagcloud>
            <div class='mdl-card mdl-cell mdl-cell--8-col mdl-cell--8-col-desktop meta about'><h1>about</h1>这个人很懒，什么都没留下。</div>
            <span>{{this.$route.query.tag}}</span>
          </div>
          <div class='demo-blog__posts mdl-grid'>
              <div class="mdl-card mdl-cell mdl-cell--12-col" @click="setCurrent(index)" v-for='(card,index) in articles'>
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
import tagcloud from './tagCloud'
export default {
  data () {
    return {
      tags: null,
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
        this.tags = data.data.allTags
        this.$store.commit('saveArticles', data.data.values)
        this.$store.commit('saveTags', data.data.allTags)
      })
    },
    getPagesOfTag (tag = this.$route.query.tag) {
      console.log(tag)
      console.log(this.$store.state)
      this.articles = this.$store.state.articles.filter(article => {
        if (article.tags.indexOf(tag) !== -1) {
          return article
        }
      })
    },
    setCurrent (index) {
      console.log(index)
      this.$store.commit('setCurrent', index)
    }
  },
  components: {
    tagcloud
  }
}

</script>

<style scoped lang='stylus'>
.mdl-card__supporting-text.meta.mdl-color-text--grey-600
  text-align: left
  line-height: 2em
.mdl-layout__container
  background: #eeeeee
  background:url('../assets/main_bg.jpg');
  background-size: cover
  background-repeat: no-repeat
.title
  font-size: 34px
.mdl-cell
  box-shadow: 3px 3px 7px #777
.posts
  display: flex
  justify-content: center
  width: 100%
</style>
