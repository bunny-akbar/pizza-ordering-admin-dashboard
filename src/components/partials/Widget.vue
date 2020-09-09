<template>
  <!-- This component shows well how a reusable component should be desinged 
  We use this component 4 times in the /orders page. Writing 4 differnet cards is just WET code and a bad practice
  instead we can design a component so that change made to one wdiget need not be re-written to the others-->

  <!-- Component also demistrates the parent child communication using props-->
  <v-card :color="widgetThemeColor" style="border-radius: 8px" flat class="app-shadow pl-2">
    <v-list height="100px" style="border-radius:0px 8px 8px 0px" class="py-3" flat>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-text="value" class="display-3" />
          <v-list-item-subtitle class="subtitle-2 pb-2">
            {{ title }}
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon color="grey" dark v-bind="attrs" small v-on="on">mdi-information-outline</v-icon>
              </template>
              <span>{{info}}</span>
            </v-tooltip>
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon large :color="widgetThemeColor" v-text="icon" />
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "Widget",
  props: {
    value: {
      required: true,
      default: "",
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
    info: {
      type: String,
      required: true,
      default: "",
    },
    icon: {
      type: String,
      required: true,
      default: "",
    },
    widgetThemeColor: {
      type: String,
      required: true,
      default: "primary",
    },
  },
};
</script>