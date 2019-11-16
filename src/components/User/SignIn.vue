
<template>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Log in</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Login" name="login" xtype="text" v-model="email"></v-text-field>
                  <v-text-field id="password" label="Password" name="password" type="password" v-model="password"></v-text-field>
                </v-form>
                 <p>You dont have an account ? You can  <router-link to="/signup">create one</router-link> </p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="logIn">Log in</v-btn>
               
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
    name: 'Login',
    data: () => ({
      email: '',
      password: '',
    }),
    props: {
      source: String,
    },
    methods: {/*
      logIn: function () {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
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