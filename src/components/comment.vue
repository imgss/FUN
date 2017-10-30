<template>
<div id="comments"></div>
</template>

<script type='text/babel'>
import 'gitment/style/default.css'
import Gitment from 'gitment'
export default {
  mounted () {
    const gitment = new Gitment({
      id: this.$route.hash, // optional
      owner: 'imgss',
      repo: 'imgss.github.io',
      oauth: {
        client_id: '2f67d490bf3af3a164da',
        client_secret: 'cd770140871343275b0db2989eebb1fdd743d38e'
      }
    })
    gitment.render(this.$el)
  }

}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  #comments
    width:80%;
</style>
