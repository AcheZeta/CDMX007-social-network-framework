import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// let app = ''

const config = {
  apiKey: 'AIzaSyDvXaJNa_0u0aCKktRqbV6B7pQ1biy3pXs',
  authDomain: 'communitech-69536.firebaseapp.com',
  databaseURL: 'https://communitech-69536.firebaseio.com',
  projectId: 'communitech-69536',
  storageBucket: '',
  messagingSenderId: '175907514833',
  appId: '1:175907514833:web:959756252628ec72'
}

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    el: '#app',
    render: h => h(App),
    router
  })
})

export const db = firebase.firestore()
