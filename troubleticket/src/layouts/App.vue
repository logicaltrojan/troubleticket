<template>
  <v-app id="keep">
    <top-bar></top-bar>
    <side-drawer></side-drawer>


    <v-content>
      <v-container
        fluid
        class="grey lighten-4 fill-height"
      >
        <router-view></router-view>

      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import topBar from '@/components/topBar.vue'
import sideDrawer from "../components/sideDrawer";
  export default {
    components : { topBar, sideDrawer},
    computed : {

    },
    props: {
      source: String,
    },

  }
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none
}
</style>