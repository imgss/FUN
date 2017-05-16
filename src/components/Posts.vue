<template>
<div class='mdl-layout__container'>
    <div class="demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded">
      <main class="mdl-layout__content">
          <div class='demo-blog__posts mdl-grid'>
              <div class="mdl-card mdl-cell mdl-cell--12-col" v-for='card in cards'>
                  <div class="mdl-card__title mdl-card__media mdl-color-text--grey-50">{{card.title}}</div>
                  <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">{{card.text}}</div>
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
        text: 'xxxxxxxxxxxxxxxxxxxx33333333333333333333333333333333333333333333333333333333'
      }, {
        title: '文章二',
        text: 'xxxxxxxxxxxxxxxxxxxx222222222222222222222222222222'
      }, {
        title: '文章三',
        text: 'xxxxxxxxxxxxxxxxxxxx'
      }]
    }
  }
}

</script>

<style scoped lang='stylus'>
.posts
  display: flex
  justify-content: center
  width: 100%

</style>
