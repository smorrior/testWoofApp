<template>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Let's create a new account</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Login" name="login" type="text" v-model="email"></v-text-field>
                  <v-text-field id="password" label="Password" name="password" type="password" v-model="password"></v-text-field>
                </v-form>
                <p>go back to <router-link to="/login"> login </router-link></p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signUp">Sign Up</v-btn>
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
    name: 'SignUp',
    data: () => ({
        email: '',
        password: ''
    }),
    props: {
      source: String,
    },
    methods: {/*
        signUp: function () {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                     this.$router.replace('home')
                },
                (err) => {
                    alert('Oops. ' + err.message)
                }
            );
        }*/
    }
}
</script>