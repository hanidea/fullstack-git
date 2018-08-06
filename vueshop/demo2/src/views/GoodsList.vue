<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span slot="bread">Goods</span>
    </nav-bread>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import './../assets/css/base.css'
import './../assets/css/product.css'
import NavHeader from '@/components/Header.vue'
import NavFooter from '@/components/Footer.vue'
import NavBread from '@/components/NavBread.vue'
export default {
  data () {
    return {
      msg: 'goodslist'
    }
  },
  components:{
    NavHeader,NavFooter,NavBread
  }
}
</script>
