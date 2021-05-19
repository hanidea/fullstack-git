<template>
    <div>
        <button @click="start">开始任务</button>
    </div>
</template>
<script>
import {defineComponent,ref} from 'vue'
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
                obj:JSON.stringify(obj)
            }
        })
    }
    return{
        start
    }

  }
})
</script>