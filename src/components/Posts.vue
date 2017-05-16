<template>
<div class='mdl-layout__container'>
    <div class="demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded">
      <main class="mdl-layout__content">
          <div class='demo-blog__posts mdl-grid'>
              <div class="mdl-card mdl-cell mdl-cell--12-col" v-for='card in cards'>
                  <div class="mdl-card__title title mdl-card__media mdl-color-text--grey-50">{{card.title}}</div>
                  <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">{{card.text}}</div>
                  <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">{{card.postDate}}</div>
              </div>
          </div>
    </main>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      cards: [{
        title: '文章一',
        text: '天边夕阳再次迎上我的脸庞',
        postDate: '昨天'
      }, {
        title: '文章二',
        text: '再次印着我那不安的新',
        postDate: '今天'
      }, {
        title: '文章三',
        text: '这是什么地方依然是如此的苍凉',
        postDate: '明天'
      }]
    }
  }
}

</script>

<style scoped lang='stylus'>
.mdl-layout__container
  background: #6734ba
.title
  font-size: 34px
.posts
  display: flex
  justify-content: center
  width: 100%

</style>
