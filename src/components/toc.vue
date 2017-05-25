<template>
<ul class='mdl-card mdl-shadow--4dp' id='toc'>
  <li v-for='(header,i) in headers' :style='styleArr[i]'>
    <a :href = '`#${header.text}`'>{{header.text}}</a>
  </li>
</ul>
</template>
 
<script>
export default {
  name: 'toc',
  data () {
    return {
    }
  },
  props: ['headers'],
  computed: {
    styleArr: function () {
      let headers = this.headers
      return headers.map(header => {
        return {
          paddingLeft: `${header.class * 5}px`,
          fontSize: header.class > 3 ? '14px' : '16px'
        }
      })
    }
  }
}
</script>

<style lang='stylus'>
#toc
  width:240px
  top:0px
  bottom:0px
  overflow:auto
  color:rgb(97,97,97)
  position:fixed
  list-style-type:none
  background-color:#fff
  & li
    text-align:left

</style>
