<template>
  <div class="hello">
  <a>
    <router-link :to="{ name: 'posts' }">

      <loading></loading>
      <h6>{{ msg }}</h6>
    </router-link>
  </a>
  </div>
</template>

<script>
import loading from '@/components/loading/2'
export default {
  name: 'hello',
  data () {
    return {
      msg: `Welcome to Imgss' Blog`
    }
  },
  mounted () {
    setTimeout(() => this.$router.push({name: 'posts'}), 3000)
  },
  components: {
    loading
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
