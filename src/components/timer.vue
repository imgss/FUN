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
  color: #0c0
  font-size: 1.2em
  background-color :#333
  top:45%
  left:20px
  position:fixed
  overflow:hidden
  &::before
    position:absolute
    right:0px
    content:' '
    display :block
    border:15px solid
    border-color:transparent #f66  transparent transparent
  &,.onedate
    height:30px;
    line-height :30px
    padding: 0
    margin-right: 15px

</style>

