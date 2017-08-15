<template>
    <div  class="demo-up" v-show='show'>
        <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" href="javascript:void 0" title="go top" role="button">
            <i class="material-icons md-48" role="presentation">arrow_back</i>
            <span class="mdl-button__ripple-container">
            <span class="mdl-ripple"></span>
            </span>
        </a>
    </div>
</template>


<script>
export default {
  name: 'toTop',
  data: () => {
    return {show: false}
  },
  methods: {
  },
  mounted () {
    document.getElementsByTagName('main')[0].addEventListener('scroll', event => {
      if (event.target.scrollTop > 400) {
        this.show = true
      } else {
        this.show = false
      }
    })
    document.querySelector('.demo-up').addEventListener('click', function () {
      let main = document.getElementsByTagName('main')[0]
      if (main.scrollTop === 0) {
        return
      } else {
        let scroll = setInterval((function (main) {
          return function () {
            if (main.scrollTop <= 0) {
              clearInterval(scroll)
            } else {
              main.scrollTop -= 100
            }
          }
        })(main), 20)
      }
    })
  }
}
</script>

<style lang='stylus'>
.demo-up{
  position: fixed
  z-index: 10
  transform: rotate(90 deg)
  top: 20px
  right: 50px
  color: rgb(255,171,64)
    a
    background-color:white
}
</style>

