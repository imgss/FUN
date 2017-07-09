<template>
  <div id="app">
    <transition name='xxx' mode='out-in'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'xxx'
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to.path, from.path)
      if ((from.path + to.path).length === 6) {
        this.transitionName = 'up'
      } else {
        this.transitionName = 'xxx'
      }
    }
  }
}
</script>

<style>
@media screen and (max-width:800px){
  .mdl-card__supporting-text.meta.mdl-color-text--grey-600 {
      font-size: 1.5rem;
  }
  .mdl-card__title.title.mdl-card__media.mdl-color-text--grey-50{
    font-size:3rem
  }
}
#app {
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.xxx-enter-active {
  transition: all .3s ease;
}
.xxx-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.xxx-fade-enter,.xxx-leave-active {
  transform: translateY(-1000px);
  opacity: 0;
}
.up-enter-active {
  transition: all .8s ease;
}
.up-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.up-fade-enter,.up-leave-active {
  opacity: 20;
}
</style>
