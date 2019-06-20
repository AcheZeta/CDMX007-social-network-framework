<template>
  <div class="Login">
    <input v-model="email" type="text" placeholder="Usuario" name="name" id="username"> <br>
    <input v-model="password" type="password" placeholder="Contraseña" name="password" id="password"> <br>
    <button @click="register"> Registrarme </button>
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
  // login () {
  //   this.$router.replace('home');
  // },
    register: function (e) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert('Yasssss, tu cuenta fue creada')
          this.$router.replace('home')
        })
      e.preventDefault()
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
