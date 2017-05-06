<template>
<div>
<div v-for='card in cards'>
<div>{{card.title}}</div>
<div>{{card.text}}</div>
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
