<template>
<div class='posts'>
  <v-card class="blue darken-1 white--text">
    <v-card-text>
      <div>{{ card_text }}</div>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      card_text: 'helloo'
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
