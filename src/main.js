import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyBAJ2TAuZin28k-XVqHwrsbD86jyMBAgcw',
  authDomain: 'communitech-1df59.firebaseapp.com',
  databaseURL: 'https://communitech-1df59.firebaseio.com',
  projectId: 'communitech-1df59',
  storageBucket: 'communitech-1df59.appspot.com',
  messagingSenderId: '699810585599',
  appId: '1:699810585599:web:5d73dbf26fc69052'
};

firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
