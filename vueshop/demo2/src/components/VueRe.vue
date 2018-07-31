<template>
  <div>
      <h1>vue-resource插件</h1>
        <a href="javascript:;" class="btn btn-primary" v-on:click="get">Get 请求</a>
        <a href="javascript:;" class="btn btn-primary" v-on:click="post">Post 请求</a>
        <a href="javascript:;" class="btn btn-primary" v-on:click="jsonp">JSONP 请求</a>
  </div>
</template>

 <script>
export default {
  data () {
    return {
      msg: 'Vue.js App'
    }
  },
  methods:{
    get:function(){
       this.$http.get("package.json",{
          params:{
            userId:"101"
          },
          headers:{
            token:"abcd"
          }
          }).then(res=>{
            this.msg = res.data;
          });
        }
    }
  }
    </script>