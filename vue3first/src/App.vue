<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg='<span style="color:red">HelloWorld</span>'/>
    <com :age="ages" @patch="msg">
      <h1 slot='a'>加上面</h1>
      <h1 slot='b'>我要</h1>
    </com>
    <!-- <Vuexx/> -->
    <pagea/>
    <pageb/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import pagea from './components/a.vue'
import pageb from './components/b.vue'
//import Vuexx from './components/vuex.vue'
import './components/n'
import com from './components/com.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    com,
    //Vuexx,
    pagea,
    pageb
  },
  data(){
    return{
      ages:180
    }
  },
  methods:{
    msg:function(ag){
      this.ages++
      window.console.log(ag)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
