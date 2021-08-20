<template>
  <div>
    <img class="top-theme" alt="Vue logo" src="./assets/title@interest.png" />
    <swipe @sub-event="onTestClick" :url="m3"/>
    <!-- <button @click="onClick">click</button> -->
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import Swipe from './components/swipe.vue'
import m3 from './assets/m3.png'

export default {
  name: 'App',
  components: {
    Swipe
  },
  setup () {
    function onTestClick (event) {
      console.log(event)
      // alert()
    }
    return {
      m3,
      onTestClick
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.top-theme {
  width: 100%;
}
</style>
