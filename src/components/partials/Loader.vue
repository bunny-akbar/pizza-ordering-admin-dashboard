<template>
  <v-overlay v-model="$store.state.showLoader" color="secondary">
    <v-container fill-height>
      <v-row justify="center">
        <v-col align="center">
          <div
            class="font-weight-light white--text"
            :class="$vuetify.breakpoint.xsOnly ? 'display-3' : 'display-4'"
          >Please Wait...</div>
          <v-progress-linear
            :size="$vuetify.breakpoint.xsOnly ? '40' : '140'"
            :width="60"
            height="4"
            rounded
            color="white"
            indeterminate
          />
        </v-col>
        <v-col v-if="false" align="center">
          <div
            class="font-weight-light white--text pt-12"
            :class="$vuetify.breakpoint.xsOnly ? 'display-3' : 'display-4'"
          >Please Wait...</div>
          <v-progress-circular
            :size="$vuetify.breakpoint.xsOnly ? '40' : '140'"
            :width="60"
            height="4"
            rounded
            color="white"
            indeterminate
          />
        </v-col>
      </v-row>
    </v-container>
  </v-overlay>
</template>

<script>
export default {
  name: "LoaderGlobal",
};
</script>
