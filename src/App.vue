<template>
  <div id="app">
    <transition name="xxx">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
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
</style>
