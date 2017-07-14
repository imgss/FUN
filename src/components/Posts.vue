<template>
<div class='mdl-layout__container'>
    <div class="demo-blog mdl-layout mdl-js-layout">
      <main class="mdl-layout__content">
          <div class='demo-blog__posts mdl-grid tagWrapper' :class='reverse ? "active" : ""' v-if='!this.$route.query.tag'>
            <!--标签云-->
            <tagcloud  class='mdl-card mdl-cell mdl-cell--8-col mdl-cell--4-col-desktop' width='200' height='200' r='80' @tagClick='getPagesOfTag' :tags='tags'></tagcloud>
            <!--关于，个人留言-->
            <div class='mdl-card mdl-cell mdl-cell--8-col mdl-cell--8-col-desktop meta about'><h1>about</h1>{{about}}</div>
          </div>
          <div class='demo-blog__posts mdl-grid tagWrapper' v-else>
            <div  class='mdl-card mdl-cell mdl-cell--8-col mdl-cell--12-col-desktop meta '><h1>{{this.$route.query.tag}}</h1></div>
          </div>
          <div class='demo-blog__posts mdl-grid'>
            <transition-group name='fade'>
              <!--文章摘要-->
              <div class="mdl-card mdl-cell mdl-cell--12-col" :style='styles[index]' @mouseenter = "hover(index)" @mouseleave = "hover(index)" @click="setCurrent(index)" v-for='(card,index) in articles' v-bind:key="index">
                <router-link :to="{path: card.id}">
                  <div class="mdl-card__title title mdl-card__media mdl-color-text--grey-50" :style='{backgroundColor:colors[index]}'>{{card.title}}</div>
                  <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">{{card.text}}</div>
                  <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                          <path fill="#000000" d="M14,14H7V16H14M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M17,10H7V12H17V10Z" />
                    </svg>{{card.postDate.replace('date:','')}}
                  </div>
                </router-link>
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
import {root, about} from '../config.json'
export default {
  data () {
    return {
      tags: null,
      about,
      reverse: false,
      articles: [],
      colors: [],
      styles: []
    }
  },
  computed: {
    pixs () {
      return this.styles.map(style => style + 'px')
    }
  },
  created () {
    if (!Object.keys(this.$route.query).length) {
      // let articles = this.$store.state.articles
      // if (articles) {
      //   for (let i = 0, len = articles.length; i < len; i++) {
      //     this.colors.push(this.getColor())
      //     this.styles.push({top: -100 * i + 'px', transitionDelay: 0.1 * i + 's'})
      //   }
      //   this.$store.commit('saveColors', this.colors)
      //   this.articles = articles
      //   this.tags = []
      //   this.tags = this.$store.state.tags
      // } else {
      this.getPages()
      // }
    } else {
      this.getPagesOfTag()
    }
  },
  mounted () {
    let main = document.querySelector('main')
    let timeId
    let lastTop = 0
    main.onscroll = () => {
      lastTop = main.scrollTop
      clearTimeout(timeId)
      timeId = setTimeout(() => {
        console.log(lastTop, main.scrollTop)
        if (main.scrollTop > 300) {
          this.reverse = true
        } else if (main.scrollTop < 300) {
          this.reverse = false
        }
      }, 200)
    }
  },
  methods: {
    hover (index) {
      this.styles[index].transitionDelay = '0s' // 将之前的过渡延迟去掉，防止影响hover效果
      let top = parseInt(this.styles[index].top)
      if (top % 100 === 0) {
        this.styles[index].top = top - 80 + 'px'
      } else {
        this.styles[index].top = top + 80 + 'px'
      }
    },
    getColor () {
      return '#' + Math.random().toString(16).slice(2, 8)
    },
    getPages () {
      axios.get(`${root}index.json`).then((data) => {
        let articles = data.data.values
        for (let i = 0, len = articles.length; i < len; i++) {
          this.colors.push(this.getColor())
          this.styles.push({top: -100 * i + 'px', transitionDelay: 0.1 * i + 's'})
        }
        this.$store.commit('saveColors', this.colors)
        this.articles = articles
        this.tags = data.data.allTags
        this.$store.commit('saveArticles', this.articles)
        this.$store.commit('saveTags', data.data.allTags)
      })
    },
    getPagesOfTag (tag = this.$route.query.tag) { // 响应tag点击事件
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
.active  
  transform:rotate(90deg)
  top: -20px
  position:fixed
  left:300px
.active svg
    transform :rotate(-90deg)
.mdl-card__supporting-text.meta.mdl-color-text--grey-600
  text-align: left
  line-height: 2em
.mdl-layout__container
  background: #eeeeee
  /*background:url('../assets/main_bg.jpg');*/
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
  transition:all .3s ease
  transform-origin : 0% 0%
.mdl-card.mdl-cell.mdl-cell--12-col {
    transition: all .3s ease;
}
.fade-enter-active, .fade-leave-active {
  transition: all 1s ease-out
}
.fade-enter, .fade-leave {
  transform: translateX(800px);
}
</style>
