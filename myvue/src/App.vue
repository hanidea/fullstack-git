<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" @keyup.enter="addNew">
    <ul>
      <li v-for="item in items " v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">{{item.label}}</li>
    </ul>
    <p>child tells me:{{childWords}}</p>
    <component-a msgfromfather='my father' v-on:child-tell-me-something='listenToMyBoy'></component-a>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import ComponentA from './components/ComponentA'
import Store from './store'
console.log(Store)
// ComponentA.$on('tellme',function(){
//   debugger;
// })
export default {
  name: 'App',
  //data:function()
  data () {
    return {
      title: 'this is a to do list.',
      items: Store.fetch(),
      newItem:'',
      childWords:''
      
    }
  },
  components: { ComponentA },
  watch:{
   items:{
   handler:function(items){
      //console.log(items)
      Store.save(items)
   },
   deep:true //don't update status if false
   }
  },
  // events: {
  //   'child-tell-me-something': function (msg)
  //   {
  //     this.childWords = msg;
  //   }
  // },
  methods:{
    toggleFinish:function(item)
      {
        item.isFinished =!item.isFinished
      },
    addNew:function()
    {
      this.items.push({
        label:this.newItem,
        isFinished:false
      })
      //console.log(this.newItem),
      this.newItem=""
    },
    listenToMyBoy:function(msg)
    {
      this.childWords = msg;
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
.finished{
text-decoration:underline;
}
</style>
