<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: `Welcome to Imgss' Blog`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background:url('../assets/back.jpeg');
    background-size: cover;
    background-repeat: no-repeat
}
h1, h2 {
  color: white;
  text-shadow: #fffb09 2px 2px 10px ;
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fbbc05;
}
</style>
