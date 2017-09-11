<template>
  <div class='timeline'>
    <div v-for="(opacity,index) in opacities" :key="index" :class='index % 2 ===0 ? "foot-left" : "foot-right"' >
      <div class='foot' v-bind:style="{opacity:opacity}"></div>
    </div>
  </div>

</template>

<script>
import Vue from 'Vue'
export default {
  data () {
    return {
      opacities: [],
      classes: []
    }
  },
  props: {
    'articleDone': Boolean
  },
  mounted () {
    let main = document.querySelector('main')
    main.addEventListener('scroll', () => {
      if (!this.articleDone) {
        return
      }
      let main = document.querySelector('main')
      let p = document.querySelector('#article')
      let mainHeight = parseInt(getComputedStyle(p).height) - 290
      let len = this.opacities.length
      let perHeight = mainHeight / len
      let beishu = parseInt(main.scrollTop / perHeight)
      for (let i = 0; i < len; i++) {
        if (i > len - beishu) {
          Vue.set(this.opacities, i, 0.6)
          // this.classes[i].opacity = 0.6
        } else {
          Vue.set(this.opacities, i, 0)
          // this.classes[i].opacity = 0
        }
      }
    })
  },
  created () {
    let count = parseInt(window.innerHeight / 40)
    for (let i = 0; i < count; i++) {
      this.opacities.push(0)
      this.classes.push({opacity: i / 20})
    }
  },
  methods: {
  }
}

</script>

<style lang='stylus' scoped>
.timeline
  // transform : rotate(180deg)
  position: fixed
  right: 20px
  height:100%
  align-items : center!important;
.foot 
  background-size: cover;
  transition: opacity ease .3s
  background-image: url('../assets/foot.png');
  width: 20px;
  height: 40px;
  opacity: 0;
  &:hover
    opacity: 1;
    cursor: pointer
.show
  opacity : 1
.foot-right 
  display: flex;
  justify-content: flex-end;
  width: 40px;
.foot-left 
  display: flex;
  justify-content: flex-start;
  width: 40px;
  div
    background-position: 0% 0%;
.foot-right div 
  background-position: 100% 0%;
.foot span 
  position: relative;


</style>
