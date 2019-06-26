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
     {{ item.data().id }} <br>
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
        id: '',
        likes: 0
      },
      items: []
    }
  },
  methods: {
    userAuth () {
      let currentUser = firebase.auth().currentUser
      if (currentUser == null) {
        this.$router.replace('login')
      }
    },
    readData () {
      db.collection('comments').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.items.push(doc)
        })
      })
    },
    addData () {
      db.collection('comments').add(this.comment)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
          // this.readData()
        })
        .catch(function (error) {
          console.error ('Error adding document: ', error)
        })
      this.reset ()
    },
    // deleteData () {
    //   db.collection("comments").doc("DC").delete().then(function() {
    //      console.log("Document successfully deleted!");
    //   }).catch(function(error) {
    //       console.error("Error removing document: ", error);
    //   });
    // },
    logOut () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    addLikes () {
      this.item.likes ++
    },
    saveLikes () {
      db.collection('comments').add(this.comment.likes)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
          // this.readData()
        })
        .catch(function (error) {
          console.error ('Error adding document: ', error)
        })
    },
    reset () {
      this.comment.id = ''
    }
  },
  created () {
    this.readData ()
    this.userAuth ()
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
