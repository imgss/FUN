<template>
<div class="mdl-layout__container"><div class="demo-blog demo-blog--blogpost mdl-layout mdl-js-layout has-drawer is-upgraded" data-upgraded=",MaterialLayout">
      <main class="mdl-layout__content">
        <div class="demo-back">
          <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" href="index.html" title="go back" role="button" data-upgraded=",MaterialButton,MaterialRipple">
            <i class="material-icons" role="presentation">arrow_back</i>
          <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></a>
        </div>
        <div class="demo-blog__posts mdl-grid">
          <div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col">
            <div class="mdl-card__media mdl-color-text--grey-50">
              <h3>{{title}}</h3>
            </div>
            <div class="mdl-color-text--grey-700 mdl-card__supporting-text meta">
              <div class="minilogo"></div>
              <div>
                <strong>The Newist</strong>
                <span>{{date}}</span>
              </div>
              <div class="section-spacer"></div>
              <div class="meta__favorites">
                425 <i class="material-icons" role="presentation">favorite</i>
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
            <div class="mdl-color-text--grey-700 mdl-card__supporting-text">
             <p v-html='post'></p>
            </div>
            <div class="mdl-color-text--primary-contrast mdl-card__supporting-text comments">
            </div>
          </div>

          <nav class="demo-nav mdl-color-text--grey-50 mdl-cell mdl-cell--12-col">
            <a href="index.html" class="demo-nav__button">
              <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-color--white mdl-color-text--grey-900" role="presentation" data-upgraded=",MaterialButton,MaterialRipple">
                <i class="material-icons">arrow_back</i>
              <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></button>
              Newer
            </a>
            <div class="section-spacer"></div>
            <a href="index.html" class="demo-nav__button">
              Older
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
        </footer>
      </main>
      <div class="mdl-layout__obfuscator"></div>
    </div></div>
</template>


<script>
import axios from 'axios'
import MarkdownIt from 'markdown-it'
let md = new MarkdownIt()
export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null,
      title: null,
      date: null
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
    fetchData () {
      let re = /---([\s\S]+)---([\s\S]+)/
      this.error = this.post = null
      this.loading = true
      getPost(this.$route.params.id, (post) => {
        let postArr = re.exec(post.data)
        let info = postArr[1]
        console.log(info)
        let [title, tags, date] = info.split('\n')
        console.log(title, tags, date)
        this.title = title
        this.date = date
        this.loading = false
        this.post = md.render(postArr[2])
        console.log(post.data)
      }, (err) => {
        console.log(err)
      })
      function getPost (id, callback, errhandler) {
        axios.get(`https://raw.githubusercontent.com/imgss/mdblog/master/${id}.md`)
              .then(callback)
              .catch(errhandler)
      }
    }
  }
}

</script>


<style>

</style>
