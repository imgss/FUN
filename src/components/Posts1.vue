<template>
<v-app id="example-4" left-fixed-sidebar sidebar-under-toolbar>
  <v-toolbar>
    <v-toolbar-side-icon @click.native.stop="nav4 = !nav4" class="hidden-sm-and-up"/>
    <v-toolbar-title>Imgss's Blog</v-toolbar-title>
  </v-toolbar>
  <main>
    <v-sidebar v-model="nav4" class="mt-0 scroll-y" :mobileBreakPoint="576" fixed>
      <v-list>
        <v-list-item v-for="i in 8" :key="i">
          <v-list-tile>
            <v-list-tile-title>文章 {{ i }}</v-list-tile-title>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-sidebar>
    <v-content>
      <v-container fluid>
        <div class="title">Main Content</div>
      </v-container>
    </v-content>
  </main>
</v-app>

</template>

<script>
import axios from 'axios'
export default {
  name: 'list',
  data () {
    return {
    }
  },
  beforeCreate () {
    axios.get('https://imgss.github.io/demo/maxRead/mergeAll.json')
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style lang='stylus' scoped>
.toolbar
    position: fixed
    top: 0

</style>
