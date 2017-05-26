<template>
<ul class='mdl-card mdl-shadow--4dp' id='toc'>
  <li v-for='(header,i) in headers' :style='styleArr[i]'>
    <a v-view = '`#${header.text}`'>{{header.text}}</a>
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
.demo-blog--blogpost div.demo-back
  position:fixed
#toc
  left:-200px
  padding-left:10px
  padding: 10px
  transition:all .3s
  width:220px
  top:30px
  bottom:0px
  overflow-y:auto
  color:rgb(97,97,97)
  position:fixed
  list-style-type:none
  background-color:#fff
  &:hover
    transform:translateX(200px)
  & li
    text-align:left
</style>
