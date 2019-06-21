<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/signup">Registrate</router-link> |
      <router-link to="/login">Inicia Sesión</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  text-align: center;
  color: #000000;
}

#nav {
  font-family: 'Bitter', serif;
  padding: 30px;
}

#nav a {
  font-family: 'Bitter', serif;
  font-weight: bold;
  color: #FF009E;
}

#nav a.router-link-exact-active {
  color: #56F89A;
}
</style>
