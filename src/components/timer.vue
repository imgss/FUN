<template>
  <div class='date' >
    <div class = 'list' :style='{top: -index*30 + "px"}'>
        <div class='onedate' v-for='date in dates' :key='date'>{{date}}</div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['dates', 'index']
}
</script>

<style scoped lang='stylus'>
.list
  position: relative
  transition :top .3s ease
.date
  top:45%
  position:fixed
  overflow hidden
  &,.onedate
    height:30px;
    line-height :30px
    padding: 0
    margin: 0

</style>

