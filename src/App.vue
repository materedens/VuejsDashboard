<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-model="drawer" app> -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Vuetify </v-list-item-title>
          <v-list-item-subtitle> Dashboard </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Dashboard", icon: "mdi-folder-home-outline", to: "/" },
      { title: "About", icon: "mdi-folder-table-outline", to: "/about" },
      { title: "Table", icon: "mdi-folder-table-outline", to: "/table" },
      { title: "Account", icon: "mdi-account-circle", to: "/account" },
      { title: "Card", icon: "mdi-card-account-details", to: "/card" },
      { title: "Calendars", icon: "mdi-calendar-multiselect", to: "/calendar" },
    ],
  }),
};
</script>
