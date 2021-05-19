<template>
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'
import {defineComponent,ref} from 'vue'

export default defineComponent({
  name:'Home',
  components:{
    NavHeader,
    NavMain,
    NavFooter

  },
  setup(props,ctx){
    let num = ref(10)
    
    return{

    }
  }

})
</script>
<style scoped lang="scss">

</style>