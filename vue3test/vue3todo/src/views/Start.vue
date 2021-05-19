<template>
    <div>
        <button @click="start">开始任务</button>
    </div>
</template>
<script>
import {defineComponent,onMounted,onUnmounted,ref} from 'vue'
import {useRouter} from 'vue-router'
export default defineComponent({
  name:'Start',
  setup(){
    let router = useRouter()
    let name =ref('jack')
    let num = ref(10)
    let obj = ref({
        msg:'start'
    })
    onMounted(()=>{
        //组件挂载的过程
        //数据 dom...
        //发请求，做初始化的操作，接受路由传递的参数
        console.log('onMounted')
    })
    onUnmounted(()=>{
        //组件卸载时的生命周期
        //清除定时器，清除闭包函数
        console.log('onUnmounted')
    })
    console.log('setup')
    let start = () =>{
        //query传参数path和name都可以
        //params传参只能用name
        router.push({
            //path:'/home',
            name:'Home',
            // query:{
            //     name:name.value,
            //     num:num.value,
            //     obj:JSON.stringify(obj)
            // }
            params:{
                name:name.value,
                num:num.value,
                obj:JSON.stringify(obj.value)
            }
        })
    }
    return{
        start
    }

  }
})
</script>