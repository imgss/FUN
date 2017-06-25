<template>
  <div id="app">
      <router-view></router-view>
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
  transform: translateX(10px);
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
