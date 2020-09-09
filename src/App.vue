<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <div class="d-flex align-center">
        <v-img
          alt="Appiness Logo"
          class="shrink mr-2"
          contain
          @click="$router.push('/')"
          src="@/assets/appiness-logo.png"
          transition="scale-transition"
          width="120"
          height="64"
        />
        <p class="mb-2 subtitle-1">gettin’ cheesy</p>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <loader />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    Loader: () => import("@/components/partials/Loader"),
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.app-shadow {
  box-shadow: 0px 4px 12px rgba(31, 56, 71, 0.1) !important;
}
</style>