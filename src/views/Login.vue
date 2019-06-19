<template>
  <div class="Login">
    <input type="text" placeholder="Usuario" name="name" id="username"> <br>
    <input type="password" placeholder="Contraseña" name="password" id="password"> <br>
    <button @click="login"> Registrarme </button>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
  // login () {
  //   this.$router.replace('home');
  // },
  login: function() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
      function(user) {
        alert('YAAASSS')
        },
      function(err){
        alert('NOPE')
        console.log(err.message)
      }
      );
    }
  }
}
</script>

<style>
#Login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#username, #password {
  padding: .5%;
  margin: .5%;
}

</style>