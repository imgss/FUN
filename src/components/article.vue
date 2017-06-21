<template>
  <div class="mdl-layout__container"><div class="demo-blog demo-blog--blogpost mdl-layout mdl-js-layout has-drawer is-upgraded" data-upgraded=",MaterialLayout">
      <main class="mdl-layout__content">
        <toc :headers = 'toc'></toc>
        <div class="demo-back">
          <router-link :to="{ name: 'posts' }">
            <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" href="javascript:void 0" title="go back" role="button" data-upgraded=",MaterialButton,MaterialRipple">
              <i class="material-icons" role="presentation">arrow_back</i>
            <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></a>
          </router-link>
        </div>
        <div class="demo-blog__posts mdl-grid">
          <div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col">
            <!--title-->
            <div class="mdl-card__media mdl-color-text--grey-50">
              <loading v-if='loading'></loading>
              <h3 v-else>{{title.split(':')[1].trim()}}</h3>
            </div>
            <!--发布日期-->
            <div class="mdl-color-text--grey-700 mdl-card__supporting-text meta">
              <div class="minilogo"></div>
              <div>
                <strong>The Newist</strong>
                <span>{{date? date.split(':')[1].trim(): ''}}</span>
              </div>
              <div class="section-spacer">
              <!--tags-->
                <tags :tags = 'tags'></tags>
              </div>
              <div class="meta__favorites">
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
        </div>
        <footer class="mdl-mini-footer">
          <div class="mdl-mini-footer--left-section">
            <button class="mdl-mini-footer--social-btn social-btn social-btn__twitter">
              <span class="visuallyhidden">Twitter</span>
            </button>
            <button class="mdl-mini-footer--social-btn social-btn social-btn__blogger">
              <span class="visuallyhidden">Facebook</span>
            </button>
            <button class="mdl-mini-footer--social-btn social-btn social-btn__gplus">
              <span class="visuallyhidden">Google Plus</span>
            </button>
          </div>
          <div class="mdl-mini-footer--right-section">
            <button class="mdl-mini-footer--social-btn social-btn__share">
              <i class="material-icons" role="presentation">share</i>
              <span class="visuallyhidden">share</span>
            </button>
          </div>
          <toTop></toTop>
        </footer>
      </main>
      <div class="mdl-layout__obfuscator"></div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import loading from '@/components/loading'
import toTop from '@/components/toTop'
import toc from '@/components/toc'
import tags from '@/components/tags'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
let md = new MarkdownIt({
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
      loading: false,
      post: null,
      error: null,
      title: null,
      date: null,
      toc: null,
      tags: null
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData (id) {
      let re = /---\n([\s\S]+)\n---([\s\S]+)/
      this.error = this.post = null
      this.loading = true
      console.log(this.$route.params.id)
      getPost(this.$route.params.id, (post) => {
        let postArr = re.exec(post.data)
        let info = postArr[1]
        let [title, tags, date] = info.split('\n')
        let html = md.render(postArr[2])
        this.title = title
        this.date = date
        this.loading = false
        this.toc = this.get_toc(postArr[2])
        this.tags = this.get_tags(tags)
        this.post = this.wrapID(html)
      }, (err) => {
        this.loading = false
        this.title = ':oops,这个文章可能被风吹走了'
        console.log(err)
      })
      function getPost (id, callback, errhandler) {
        axios.get(`https://raw.githubusercontent.com/imgss/mdblog/master/posts/${id}.md`)
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
      return tags.split(':')[1].trim().split(/\b/)
    },
    wrapID (html) {
      let re = /<(h[1-6]).*?>([\S\s]*?)<\/\1>/gm
      return html.replace(re, `<$1 id = '$2'>$2</$1>`)
    },
    toAricle (flag) {
      let articleId
      if (flag === 'next') {
        articleId = this.$store.getters.nextArticle.id
      } else {
        articleId = this.$store.getters.prevArticle.id
      }
      this.$store.commit('setCurrent', articleId)
      this.$router.push(`${articleId}`)
      this.fetchData()
    }
  },
  components: {
    loading,
    toc,
    toTop,
    tags
  }
}

</script>


<style lang='stylus'>
.demo-back
  position:fixed
.mdl-layout__container
  background:#212121
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
  & pre
    line-height:1.25em
  & p
    max-width:750px
    line-height:2em
  & h1
    color:#ff5607
    text-align:center
  & h2
    color:#009788
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
