<template>
      <div>{{num}}</div>
      <div>{{name}}</div>
      <div>{{arr.slice(0,2)}}</div>
      <div>{{obj.age}}</div>
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
    let name = ref('jack')
    let arr = ref(['a','b','c','d'])
    let obj = ref({
      age:20
    })
    return{
      num,
      name,
      arr,
      obj
    }
  }

})
</script>
<style scoped lang="scss">

</style>