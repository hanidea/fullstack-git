<template>
  <div id="app">
    <!-- <router-view @change-view="onChangeView" /> -->
    <router-view />
    {{changedUrl}}
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import Home from '@/views/home'
import store from '@/store/index'
import router from '@/router'
import { watch, computed } from 'vue'

export default {
  name: 'App',
  components: {
    Home
  },
  setup (props, context) {
    // watch
    const changedUrl = computed(() => store.state.routerParams)
    watch(changedUrl, (newVal, oldVal) => {
      // alert(newVal)
      router.push(newVal)
    })
    // function onChangeView (event) {
    //   router.push(event)
    //   // router.push({
    //   //   name: event.name,
    //   //   params: {
    //   //     id: event.params.id
    //   //   }
    //   // })
    // }
    return {
      changedUrl
      // onChangeView
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
