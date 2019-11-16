import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import firebase from 'firebase';
import vuetify from './plugins/vuetify';
import {store} from './store'

Vue.config.productionTip = false

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

new Vue({
  router: router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
