<template>
<div class='mdl-layout__container'>
    <div class="demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded">
      <main class="mdl-layout__content">
          <div class='demo-blog__posts mdl-grid tagWrapper' v-if='!this.$route.query.tag'>
            <tagcloud  class='mdl-card mdl-cell mdl-cell--8-col mdl-cell--4-col-desktop' width='200' height='200' r='80' @tagClick='getPagesOfTag' :tags='tags'></tagcloud>
            <div class='mdl-card mdl-cell mdl-cell--8-col mdl-cell--8-col-desktop meta about'><h1>about</h1>这个人很懒，什么都没留下。</div>
          </div>
          <div class='demo-blog__posts mdl-grid tagWrapper' v-else>
            <div  class='mdl-card mdl-cell mdl-cell--8-col mdl-cell--12-col-desktop meta '><h1>{{this.$route.query.tag}}</h1></div>
          </div>
          <div class='demo-blog__posts mdl-grid'>
            <transition-group name='fade'>
              <div class="mdl-card mdl-cell mdl-cell--12-col" :style='{top:-100*index+"px"}' @click="setCurrent(index)" v-for='(card,index) in articles' v-bind:key="index">
                <router-link :to="card.id">
                  <div class="mdl-card__title title mdl-card__media mdl-color-text--grey-50" :style='{backgroundColor:colors[index]}'>{{card.title}}</div>
                </router-link>
                <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">{{card.text}}</div>
                <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="#000000" d="M14,14H7V16H14M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M17,10H7V12H17V10Z" />
                  </svg>{{card.postDate.replace('date:','')}}
                </div>
              </div>
            </transition-group>
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
      articles: [],
      colors: []
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
    getColor () {
      return '#' + Math.random().toString(16).slice(2, 8)
    },
    getPages () {
      axios.get(`https://raw.githubusercontent.com/imgss/mdblog/master/posts/index.json`).then((data) => {
        let articles = data.data.values
        for (let i = 0, len = articles.length; i < len; i++) {
          this.colors.push(this.getColor())
        }
        let loop = setInterval(() => {
          if (articles.length) {
            this.articles.push(articles.shift())
          } else {
            clearInterval(loop)
          }
        }, 500)
        this.tags = data.data.allTags
        this.$store.commit('saveArticles', this.articles)
        this.$store.commit('saveTags', data.data.allTags)
      })
    },
    getPagesOfTag (tag = this.$route.query.tag) {
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
svg
  width:25px
  height:20px
.mdl-card__supporting-text.meta.mdl-color-text--grey-600
  text-align: left
  line-height: 2em
.mdl-layout__container
  background: #eeeeee
  background:url('../assets/main_bg.jpg');
  /*background:-webkit-linear-gradient(top,#3c3382 20%,#79547d 80%,#f39746)*/
  background-size: cover
  background-repeat: no-repeat
.title
  font-size: 34px
.mdl-card.mdl-cell.mdl-cell--12-col
  box-shadow: 0px 0px 30px #333
.posts
  display: flex
  justify-content: center
  width: 100%
.tagWrapper
  justify-content: center
.mdl-card.mdl-cell.mdl-cell--12-col:hover
  z-index:999
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
