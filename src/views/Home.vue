<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/Laboratoria.jpg"> -->
    <HelloWorld msg="Communitech"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style>
#home {
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>

