<template>
      <!-- <div>{{name}}</div>
      <div>{{age}}</div>
      <div>{{obj}}</div> -->
      <!-- <NavHeader></NavHeader>
      <NavMain></NavMain>
      <NavFooter></NavFooter>
      <div>{{list}}</div> -->
      <button @click="goto">跳转路由</button>
</template>
<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'
import {defineComponent,ref,reactive,toRefs,computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter,useRoute} from 'vue-router'
export default defineComponent({
  name:'Home',
  components:{
    NavHeader,
    NavMain,
    NavFooter

  },
  setup(props,ctx){
    // let store = useStore()
    // //console.log(store)
    // let list = computed(()=>{
    //   return store.state.list
    // })
    // router是全局
    let router = useRouter()
    // route是当前路由对象
    let route = useRoute()
    // 传递过来都是字符串类型
    console.log(route.params)
    let goto = () =>{
      //跳转路由
      // push函数里面可以传入跳转的路径
      // back: 回退到上一页
      // forward: 去到下一页
      // go(整数) 整数代表前进 负数代表后退
      router.push({
        path:'/about'
      })
    }
    // let num = ref(10)
    // let name = ref('jack')
    // let arr = ref(['a','b','c','d'])
    // let obj = ref({
    //   age:20
    // })
    // let data = reactive({
    //   name:'jack',
    //   age:20,
    //   obj:{
    //     price:20
    //   },
    //   arr:['a','b','c','d']
    // })
    return{
      // num,
      // name,
      // arr,
      // obj
      //data
      //...toRefs(data)
      //list
      goto
    }
  }

})
</script>
<style scoped lang="scss">

</style>