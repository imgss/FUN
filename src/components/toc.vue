<template>
<ul class='toc mdl-card mdl-shadow--4dp'>
  <li v-for='header in headers'>{{header.text}}</li>
</ul>
</template>

<script>
export default {
  name: 'toc',
  data () {
    return {
    }
  },
  props: ['headers']
}
</script>

<style lang='stylus'>
.toc
  width:200px
  color:rgb(97,97,97)
  position:fixed
  list-style-type:none
  background-color:#fff
  & li
    text-align:left

</style>
