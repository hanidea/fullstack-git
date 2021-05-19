<template>
      <!-- <div>{{name}}</div>
      <div>{{age}}</div>
      <div>{{obj}}</div> -->
      <NavHeader></NavHeader>
      <NavMain></NavMain>
      <NavFooter></NavFooter>
</template>
<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'
import {defineComponent,ref,reactive,toRefs} from 'vue'

export default defineComponent({
  name:'Home',
  components:{
    NavHeader,
    NavMain,
    NavFooter

  },
  setup(props,ctx){
    // let num = ref(10)
    // let name = ref('jack')
    // let arr = ref(['a','b','c','d'])
    // let obj = ref({
    //   age:20
    // })
    let data = reactive({
      name:'jack',
      age:20,
      obj:{
        price:20
      },
      arr:['a','b','c','d']
    })
    return{
      // num,
      // name,
      // arr,
      // obj
      //data
      ...toRefs(data)
    }
  }

})
</script>
<style scoped lang="scss">

</style>