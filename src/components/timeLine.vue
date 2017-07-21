<template>
  <div class='timeline'>
    <div v-for="year in years" :key="year" :class='year % 2 ===0 ? "foot-left" : "foot-right"' @click='trigger(year)'>
      <div class='foot'><span class='year'>{{year}}</span></div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      years: [2017, 2016, 2015, 2014, 2013, 2012, 2011]
    }
  },
  methods: {
    trigger (year) {
      this.$emit('yearClick', year)
    }
  }
}

</script>

<style lang='stylus'>
.timeline
  align-items : center!important;
.foot 
  background-size: cover;
  background-image: url('../assets/foot.png');
  width: 20px;
  height: 40px;
  opacity: 0.5;
  &:hover
    opacity: 1;
    cursor: pointer
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
