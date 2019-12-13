import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import firebase from 'firebase';
import vuetify from './plugins/vuetify';
import {store} from './store';
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';


Vue.config.productionTip = false

extend('required', {
  ...required,
  message: 'This field is required'
});

const firebaseConfig = {
  apiKey: "AIzaSyDB_k-BPTI6A6XHdOnXljT_urkIiym9ofw",
  authDomain: "vue-app-fcf9f.firebaseapp.com",
  databaseURL: "https://vue-app-fcf9f.firebaseio.com",
  projectId: "vue-app-fcf9f",
  storageBucket: "vue-app-fcf9f.appspot.com",
  messagingSenderId: "479921669419",
  appId: "1:479921669419:web:bd02a70cf09509d799716e"
};
firebase.initializeApp(firebaseConfig)

var router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.use(VueRouter)

Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router: router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
