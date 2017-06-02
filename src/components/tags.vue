<template>
<div>
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
    border: 1px solid rgba(0, 0, 0, 0.54)
    border-radius: 4px
    padding: 0 10px
    line-height: 24px
    font-size: 12px
    text-decoration: none
    margin: 0 1px
    margin-bottom: 6px
    & a
      cursor: pointer
      color: rgba(0, 0, 0, 0.8)
      &:hover
        background: rgba(255, 255, 255, 0.8)
</style>
