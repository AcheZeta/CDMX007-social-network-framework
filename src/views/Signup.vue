<template>
  <div class="sign-up">
    <input v-model="user" type="text" placeholder="Usuario" name="name" id="username"> <br>
    <input v-model="email" type="text" placeholder="Correo" name="correo" id="mail"> <br>
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
      user: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register: function (e) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          ('Yasssss, tu cuenta fue creada')
          this.$router.replace('/login')
        },
        error => {
          alert('Opps, Algo Salió Mal')
        })
      e.preventDefault()
    }
  }
}
</script>

<style>
#sign-up {
  text-align: center;
  color: #2c3e50;
}
#username, #password, #mail {
  padding: .5%;
  margin: .5%;
}

</style>
