<template>

  <div class="hello">
  <a><router-link :to="{ name: 'posts' }">
    <h2>{{ msg }}</h2>
    </router-link>
    </a>
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
body{
  margin:0;
}
.hello{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background:url('../assets/back.jpg');
    background-size: cover;
    background-repeat: no-repeat
}
h1, h2 {
  color: white;
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
  color: white;
  text-decoration: none;
}
</style>
