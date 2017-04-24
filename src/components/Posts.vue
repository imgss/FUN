<template>
<v-app id="example-4" left-fixed-sidebar sidebar-under-toolbar>
  <v-toolbar>
    <v-toolbar-side-icon @click.native.stop="nav4 = !nav4" class="hidden-sm-and-up"/>
    <v-toolbar-title>Toolbar</v-toolbar-title>
  </v-toolbar>
  <main>
    <v-sidebar v-model="nav4" class="mt-0 scroll-y" :mobileBreakPoint="576" fixed>
      <v-list>
        <v-list-item v-for="i in 8" :key="i">
          <v-list-tile>
            <v-list-tile-title>Item {{ i }}</v-list-tile-title>
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
export default {
  name: 'list',
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
