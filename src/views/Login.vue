<template>
  <div class="Login">
    <input type="text" placeholder="Usuario" name="name" id="username"> <br>
    <input type="password" placeholder="Contraseña" name="password" id="password"> <br>
    <button> Registrarme </button>
  </div>
</template>

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