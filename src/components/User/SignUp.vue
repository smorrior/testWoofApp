<template>
    <v-content>
      <v-container >
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>CREATE AN ACCOUNT</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Login" name="login" type="text" v-model="email" required></v-text-field>
                  <v-text-field id="password" label="Password" name="password" type="password" counter v-model="password" required :rules="[rules.required, rules.min]" hint="At least 6 characters"></v-text-field>
                  <v-text-field id="confirmPassword" label="Confirm password" name="confirmPassword" counter type="password" v-model="confirmPassword" :rules="[comparePassword]"></v-text-field>
                </v-form>
                <p>go back to <router-link to="/sign-in"> login </router-link></p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signUp">CREATE AN ACCOUNT</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" v-if="error">
          <v-col cols="12" sm="8" md="4">
            <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>
<script>
//import firebase from 'firebase';
export default {
  name: 'SignUp',
  data: () => ({
      email: '',
      password: '',
      confirmPassword: '',
      rules : {
        required: value => !!value || 'Required.',
        min: v => v.length >= 6 || 'Min 6 characters',
      }
  }),
  props: {
    source: String,
  },
  computed: {
    comparePassword () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : true
    },
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
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
    signUp () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>