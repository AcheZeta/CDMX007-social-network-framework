<template>
  <div class="sign-up">
    <input v-model="email" type="text" placeholder="Usuario" name="name" id="username"> <br>
    <input v-model="password" type="password" placeholder="Contraseña" name="password" id="password"> <br>
    <button @click="login"> Iniciar Sesión </button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function (e) {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.replace('wall')
        },
        err => {
          alert('Opps, Algo Salió Mal, Intenta de nuevo')
        })
      e.preventDefault()
    }
  }
}
</script>

<style>
#sign-up {
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  color: #2c3e50;
}
#username, #password {
  padding: .5%;
  margin: .5%;
}

</style>
