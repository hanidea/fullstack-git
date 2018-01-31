<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <h1>{{msgfromfather}}</h1>
      <button v-on:click="onClickMe">open mouse</button>
  </div>
</template>
<script>
export default {
    name: 'ComponentA',
    data () {
    return{
        msg:'hello from component a!'
    }
},
props: ['msgfromfather'],
methods:{
   onClickMe:function(){
       //console.log(this.msgfromfather)
       this.$emit('child-tell-me-something',this.msg);
       //this.$dispatch('child-tell-me-something',this.msg);
   }
}
}
</script>
<style>
</style>