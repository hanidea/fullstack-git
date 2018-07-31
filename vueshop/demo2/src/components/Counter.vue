<template>
  <div>
      <button @click="increment">+</button>
      <button v-on:click="decrement">-</button>
      <p><span>{{num}}</span></p>
  </div>
</template>

<script>
export default {
  props:['num'],
  data () {
    return {
      //num: '0',
      msg: 'Vue.js App'
    }
  },
  methods:{
    increment(){
      // this.num++;
      this.$emit("incre")
    },
    decrement(){
      // this.num--;
      this.$emit("decre")
    }
  }
}
</script>
