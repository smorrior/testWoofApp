<template>
  <v-app id="inspire" >
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item v-for="item in itemsInMenu" :key="item.title" router :to="item.link">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="userIsAuthenticated" @click="onLogout">
          <v-list-item-action>
            <v-icon>mdi-login-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sign Out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="font-weight-bold display-1">woofApp<v-icon>mdi-paw</v-icon></v-toolbar-title>
    </v-app-bar>
    <router-view>
    </router-view>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    computed: {
      itemsInMenu () {
        let itemsInMenu = [
          
          { icon: 'mdi-calendar-search', title: 'View Meetups', link: '/'},
          { icon: 'mdi-account-plus-outline', title: 'Sign Up', link: '/sign-up'},
          { icon: 'mdi-login-variant', title: 'Sign In', link: '/sign-in'},
        ]
        if (this.userIsAuthenticated) {
          itemsInMenu = [
            { icon: 'mdi-calendar-search', title: 'View Meetups', link: '/'},
            { icon: 'mdi-calendar-edit', title: 'Create Meetup', link: '/organize-meetup'},
            { icon: 'mdi-account-box-outline', title: 'Profile', link: '/profile'}
          ]
        }
        return itemsInMenu
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>
<style>

</style>