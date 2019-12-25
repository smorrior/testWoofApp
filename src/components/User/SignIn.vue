<template>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>LOGIN TO YOUR ACCOUNT</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Login" name="login" type="text" v-model="email" required></v-text-field>
                  <v-text-field id="password" label="Password" name="password" type="password" counter v-model="password" required :rules="[rules.required]" ></v-text-field>
                </v-form>
                <p>Don't have account, <router-link to="/sign-up">Sign Up</router-link></p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signIn">LOGIN</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>
<script>
//import firebase from 'firebase';
export default {
  name: 'SignIn',
  data: () => ({
      email: '',
      password: '',
      rules : {
        required: value => !!value || 'Required.'
      }
  }),
  props: {
    source: String,
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    signIn () {
      this.$store.dispatch('signInUser', {email: this.email, password: this.password})
    }
  }
}
</script>