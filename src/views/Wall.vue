<template>
  <div id="wall">
    <div id="logout" @click="logOut">Salir</div>
    <br>
    <div class="comment-form">
      <textarea type="text" v-model="comment.id" placeholder="Cuentanos algo"></textarea>
      <br>
    </div>
    <div id="button">
      <button @click="addData">Comentar</button>
    </div>
    <div v-for="item in items" :key="item.id" id="comments">
     {{ item.id }}
    </div>
  </div>
</template>

<script>
import { db } from '../main.js'
import firebase from 'firebase'

export default {
  name: 'wall',
  data () {
    return {
      comment: {
        id: ''
      },
      items: []
    }
  },
  methods: {
    readData () {
      db.collection('hola').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.items.push(doc.data())
        })
      })
    },
    addData () {
      db.collection('hola').add(this.comment)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
          // this.readData()
        })
        .catch(function (error) {
          console.error ('Error adding document: ', error)
        })
      this.reset()  
    },
    logOut () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    reset () {
      this.comment.id = '';
    },
  },
  created () {
    this.readData ()
  }
}
</script>

<style>

#comments {
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  color: #42b983;
  background-color: #000000;
  padding: 1%;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 2%;
}

#logout {
  font-family: 'Bitter', serif;
  font-weight: bold;
  color: #FF009E;
}

</style>
