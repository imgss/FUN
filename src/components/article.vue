<template>
  <div class="mdl-layout__container" :style='{"backgroundImage": `linear-gradient(0deg, #fff 0%, ${color} 100%)`}'>
    <div class="demo-blog demo-blog--blogpost mdl-layout mdl-js-layout">
      <main class="mdl-layout__content">
        <toc :headers = 'toc' :active = 'active'></toc>
        <div class="demo-back">
          <router-link :to="{ name: 'posts' }">
            <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-color--white mdl-color-text--grey-900" href="javascript:void 0" title="go back" role="button">
              <i class="material-icons" role="presentation">arrow_back</i>
            <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></a>
          </router-link>
        </div>
        <transition :name="transitionName">
          <div class="demo-blog__posts mdl-grid" v-if='!loading'>
            <div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col">
              <!--title-->
              <div class="mdl-card__media mdl-color-text--grey-50" :style='{backgroundColor: color}'>
                <h3>{{title.split(':')[1].trim()}}</h3>
              </div>
              <!--发布日期-->
              <div class="mdl-color-text--grey-700 no-select meta">
                <div class="minilogo">
                  <svg style="width:48px;height:48px" viewBox="0 0 24 24">
                      <path fill="#566" d="M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z" />
                  </svg>
                </div>
              <div>
                  <span>{{date && date.replace('date:','')}}</span>
                </div>
                <div class="section-spacer">
                <!--tags-->
                  <tags :tags = 'tags'></tags>
                </div>
                <div :style='{color:heart}' class="meta__favorites" @click='heart = heart === "#f66" ? "" : "#f66"'>
                  <i class="material-icons" role="presentation">favorite</i>
                  <span class="visuallyhidden">favorites</span>
                </div>
                <div>
                  <i class="material-icons" role="presentation">bookmark</i>
                  <span class="visuallyhidden">bookmark</span>
                </div>
                <div>
                  <i class="material-icons" role="presentation">share</i>
                  <span class="visuallyhidden">share</span>
                </div>
              </div>
              <!--文章-->
              <div class="mdl-color-text--grey-700 mdl-card__supporting-text">
              <p class='article' id = "article" v-html='post'></p>
              </div>

            </div>

          </div>
        </transition>
                  <nav class="demo-nav mdl-color-text--grey-50 mdl-cell mdl-cell--12-col">
            <a @click='toAricle("prev")' class="demo-nav__button">
              <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-color--white mdl-color-text--grey-900" role="presentation" data-upgraded=",MaterialButton,MaterialRipple">
                <i class="material-icons">arrow_back</i>
              <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></button>
              上一篇
            </a>
            <div class="section-spacer"></div>
            <a @click='toAricle("next")' class="demo-nav__button">
              下一篇
              <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-color--white mdl-color-text--grey-900" role="presentation" data-upgraded=",MaterialButton,MaterialRipple">
                <i class="material-icons">arrow_forward</i>
              <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></button>
            </a>
          </nav>
        <foot :show='show'></foot>
      </main>
      <div class="mdl-layout__obfuscator"></div>
      <!-- 返回顶部 -->
      <toTop></toTop>
      <walker :articleDone='!loading'></walker>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import loading from '@/components/loading/1'
import toTop from '@/components/toTop'
import toc from '@/components/toc'
import walker from '@/components/walker'
import tags from '@/components/tags'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import foot from './footer'
import {root} from '../config.json'
let md = new MarkdownIt({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }
    return '' // use external default escaping
  }
})
export default {
  data () {
    return {
      show: false,
      transitionName: 'slide-fade-left',
      loading: false,
      color: null,
      post: null,
      error: null,
      title: null,
      date: null,
      toc: null,
      tags: null,
      active: 0,
      heart: ''
    }
  },
  created () {
    this.color = this.$store.getters.currentColor
    this.fetchData()
  },
  updated () {
    this.color = this.$store.getters.currentColor
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    activeHeaders () {
      let hs = []
      document.querySelector('main').addEventListener('scroll', (e) => {
        hs = hs.length ? hs : [].slice.call(document.getElementById('article').querySelectorAll('h2,h3,h4'))
        for (let h of hs) {
          let scrollTop = e.target.scrollTop
          let offsetTop = h.offsetTop
          let innerHeight = window.innerHeight
          if (offsetTop < scrollTop + innerHeight && offsetTop > scrollTop) {
            this.active = hs.indexOf(h)
            break
          }
        }
      })
    },
    fetchData (id) {
      let re = /---\n([\s\S]+)\n---([\s\S]+)/
      this.error = this.post = null
      this.loading = true
      getPost(this.$route.params.id, (post) => {
        let postArr = re.exec(post.data)
        let info = postArr[1]
        let [title, tags, date] = info.split('\n')
        let html = md.render(postArr[2])
        this.title = title
        this.date = date
        this.loading = false
        this.show = true
        this.toc = this.get_toc(postArr[2])
        this.tags = this.get_tags(tags)
        this.post = this.wrapID(html)
        this.activeHeaders()
      }, (err) => {
        this.loading = false
        this.title = ':oops,这个文章可能被风吹走了'
        console.log(err)
      })
      function getPost (id, callback, errhandler) {
        axios.get(`${root}${id}.md`)
              .then(callback)
              .catch(errhandler)
      }
    },
    get_toc (md) {
      let re = /^#{2,4}\s(.+)$/mg
      let result = []
      while (true) {
        let match = re.exec(md)
        if (!match) {
          break
        }
        result.push(match[0])
      }
      result = result.map(header => {
        /(#+)\s(.+)/.test(header)
        return {
          class: RegExp.$1.length,
          text: RegExp.$2
        }
      })
      return result
    },
    get_tags (tags) {
      return tags.split(':')[1].trim().split(/\s+/)
    },
    wrapID (html) {
      let re = /<(h[1-6]).*?>([\S\s]*?)<\/\1>/gm
      return html.replace(re, `<$1 id = '$2'>$2</$1>`)
    },
    toAricle (flag) {
      let articleId
      if (flag === 'next') {
        this.transitionName = 'slide-fade-right'
        articleId = this.$store.getters.nextArticle.id
      } else {
        this.transitionName = 'slide-fade-left'
        articleId = this.$store.getters.prevArticle.id
      }
      this.show = false
      this.$store.commit('setCurrent', articleId)
      this.$router.push(`${articleId}`)
      this.fetchData()
    }
  },
  components: {
    loading,
    toc,
    toTop,
    tags,
    foot,
    walker
  }
}

</script>


<style lang='stylus'>
.no-select
  user-select: none
nav.demo-nav
    display: flex;
    position: fixed;
    padding: 0 30px;
    top: 75%;
    a
      color: black
.demo-back
  position:fixed
.mdl-layout__container
  background-color: #85FFBD;
  background-color: #21D4FD;
  background-image: linear-gradient(0deg, #21D4FD 0%, #B721FF 100%);
  background-size: cover
.slide-fade-left-enter-active,.slide-fade-right-enter-active {
  transition: all .3s ease;
}
.slide-fade-left-leave-active.slide-fade-right-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-right-enter, .slide-fade-right-leave-to {
  transform: translateX(100px); 
  opacity: 0;
}
.slide-fade-left-enter, .slide-fade-left-leave-to {
  transform: translateX(-100px); 
  opacity: 0;
}
#article
  text-align: left
  max-width:750px
  margin: 10px
  & blockquote
    &:before,&:after
      content:''
    border-left:3px solid #353535
    padding-left:10px
  & img
    width:90%
    display:block
  & pre
    overflow-x:auto
    line-height:1.25em
    & span
      line-height:2em
  & p
    max-width:750px
    line-height:2em
  & h1
    color:#ff5607
    text-align:center
  & h2
    color:#009788
    ransition:all .3s
  & h3
    color:#122c4d
  & h4
    color:#5f7d8c
  & h5
    color:#89c541
  & code
    font-family: Consolas, Monaco, "Andale Mono", monospace;
    line-height: 1em
  & pre
    padding:5px 20px
    background: #eff
    max-width:720px
    font-size:14px
</style>
