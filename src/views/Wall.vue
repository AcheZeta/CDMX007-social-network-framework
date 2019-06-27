<template>
  <div id="wall">
    <div id="logout" @click="logOut">Salir</div>
    <br>
    <div class="comment-form">
      <textarea type="text" v-model="comment.comment" placeholder="Cuentanos algo"></textarea>
      <br>
    </div>
    <div id="button">
      <button @click="addData">Comentar</button>
    </div>
    <div v-for="(post, index) in items" :key="post.comment" id="comments">
     {{ post.data().comment }} <br>
     <button id="edit" @click="updateData(index)">Editar</button>
     <button id="delete" @click="deleteData(index)">Eliminar</button>
    </div>
  </div>
</template>

<script>
import { db } from '../main.js'
import firebase from 'firebase'
import { compileFunction } from 'vm';

export default {
  name: 'wall',
  data () {
    return {
      comment: {
        author: '',
        comment: '',
        likes: 0,
        time: Date()
      },
      items: []
    }
  },
  methods: {
    //Check if the user is authenticated, if is not, replace the route.
    userAuth () {
      let currentUser = firebase.auth().currentUser
      if (currentUser == null) {
        this.$router.replace('login')
      }
    },
    //Brings realtime actualization
    // watcher () {
    //   db.collection('comment').onSnapshot((querySnapshot) => {
    //     this.items = [];
    //     querySnapshot.forEach((doc) => {
    //         this.items.push(doc);
    //     });
    //     console.log("Current cities in CA: ", cities.join(", "));
    // });
    // },
    //Read the data from firebase and push into a empty array
    readData () {
      db.collection('comments').orderBy('time', 'asc').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.items.push(doc)
        })
      })
    },
    //Save the new comment into firebase. 
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
      // this.watcher ()
    },
    //Takes the id and delete the document in firebase.
    deleteData (index) {
      if(confirm('Eliminar Posts?')){
        db.collection('comments').doc(this.items[index].id).delete().then(function() {
          console.log("Document successfully deleted!");
      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
      }
      else{}
    },
    updateData (index) {
      console.log(this.items[index].id)
    },
    //Close the session and replace the route
    logOut () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    addLikes () {
      this.item.likes ++
    },
    saveLikes () {
    },
    reset () {
      this.comment.comment = ''
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
