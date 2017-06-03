<template>
<div>
    <div style = 'vertical-align:middle;height:30px;line-height:30px;display:inline-block;margin-right:10px'>
      <i role="presentation" class="material-icons" style='transform:rotate(-145deg)'>label</i>
    </div>
    <div v-for='(tag, i) in tags' class = 'tag'>
            <a>{{ tag }}</a>
    </div>
</div>
</template>

<script>
export default {
  name: 'tags',
  data () {
    return {
    }
  },
  props: ['tags']
}
</script>

<style lang='stylus'>
#tags
  display: block
.tag
    display: inline-block
    background: #9f9f9f
    border-radius: 4px
    padding: 0 10px
    line-height: 24px
    font-size: 12px
    padding: 3px 10px
    text-decoration: none
    margin: 0 1px
    margin-right: 6px
    margin-bottom: 6px
    & a
      cursor: pointer
      color: #fff
    &:hover
      background: #f90
      color: white
</style>
