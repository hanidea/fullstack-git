<template>
  <div>
      这是商品列表页面
      <p>{{$route.params.goodsId}}</p>
      <p>{{$route.params.name}}</p>
      <router-link to="/goods/title">显示商品标题</router-link>
      <router-link to="/goods/img">显示商品图片</router-link><br>
      <router-view></router-view>
      <!-- <router-link to="/cart">跳转到购物车页面</router-link> -->
      <router-link v-bind:to="{name:'cart',params:{cartId:123}}">跳转到购物车页面</router-link>
      <button @click="jump" class="btn btn-primary">button - 跳转到购物车页面</button>
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
      jump(){
        //   this.$router.push("/cart");
        //   this.$router.push({path:'/cart?goodsId=123'});
        this.$router.go(-2);
      }
  }
}
</script>
