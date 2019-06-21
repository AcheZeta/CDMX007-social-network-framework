<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      La red para estudiantes y egresadas de Laboratoria
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  color: #000000;
}

a {
  color: #42b983;
}
</style>
