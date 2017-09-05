<template>
  <div class='timeline' :class='{}'>
    <div v-for="(year,index) in years" :key="index" :class='index % 2 ===0 ? "foot-left" : "foot-right"' >
      <div class='foot' v-bind:style="classes[index]"></div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      years: [],
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
      let len = this.years.length
      let perHeight = mainHeight / len
      let beishu = parseInt(main.scrollTop / perHeight)
      for (let i = 0; i < len; i++) {
        if (i > len - beishu) {
          this.classes[i].opacity = 0.6
        } else {
          this.classes[i].opacity = 0
        }
      }
      console.log(this.years)
    })
  },
  created () {
    let count = parseInt(window.innerHeight / 40)
    for (let i = 0; i < count; i++) {
      this.years.push(0.5)
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
.foot-left .year 
  right: 40px;
.foot-right .year 
  left: 20px;
.foot span 
  position: relative;


</style>
