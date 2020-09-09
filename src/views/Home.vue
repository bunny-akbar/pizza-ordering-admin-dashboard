<template>
  <v-container fill-height>
    <v-row justify="center" class="mx-0">
      <v-col cols="12" class="py-10">
        <div>
          <div
            :class="$vuetify.breakpoint.xsOnly ? 'title' : 'display-4 font-weight-light'"
            class="secondary--text mb-8"
            align="center"
          >Welcome Admin!</div>
          <div
            :class="$vuetify.breakpoint.xsOnly ? 'subtitle-2' : 'display-3 font-weight-light'"
            class="secondary--text"
            align="center"
          >
            Watch every order placed in your Appiness Pizza store
            <br />from your seat with your admin dashboard!
          </div>
        </div>
      </v-col>
      <v-col align="center">
        <v-btn @click="$router.push('/orders')" dark color="primary">Go to Dashboard</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>