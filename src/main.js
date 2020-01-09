import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import firebase from 'firebase';
import vuetify from './plugins/vuetify';
import {store} from './store';
import AlertComponent from './components/Shared/Alert.vue'
import Register from './components/MeetUp/Register/Register.vue'

Vue.config.productionTip = false

Vue.component('app-alert', AlertComponent)
Vue.component('app-register', Register)

const firebaseConfig = {
  apiKey: 'AIzaSyDNr2ZU6ZI9OZFitzqetkc8OQ_4xQjcYZI',
  authDomain: 'woofapp-6d448.firebaseapp.com',
  databaseURL: 'https://woofapp-6d448.firebaseio.com',
  projectId: 'woofapp-6d448',
  storageBucket: 'woofapp-6d448.appspot.com',
  messagingSenderId: '633794703442',
  appId: '1:633794703442:web:7f3adde4e0f33dde0c6f8b'
};
firebase.initializeApp(firebaseConfig)

var router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.use(VueRouter)

new Vue({
  router: router,
  vuetify,
  store,
  render: h => h(App),
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadMeetup')
  }
}).$mount('#app')
