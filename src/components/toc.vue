<template>
<ul class='mdl-card mdl-shadow--4dp' id='toc'>
  <li v-for='(header,i) in headers' :style='styleArr[i]' :class='i===active?"active":""'>
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
  props: ['headers', 'active'],
  computed: {
    styleArr: function () {
      let headers = this.headers
      return headers.map(header => {
        return {
          paddingLeft: `${(header.class - 2) * 10}px`,
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
  z-index: 9
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
    cursor:pointer
    & a
      color:#f66
    &.active a
      color: #66F
    & a:hover 
      color: #0086d4

</style>
