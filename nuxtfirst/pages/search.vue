<template>
    <div class="page">
        Page is search
        <ul>
            <!-- <li v-for="(item,idx) in list" :key="idx">{{item}}</li> -->
            <li v-for="(item,idx) in $store.state.navbar.app" :key="idx">{{item}}</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    layout:'search',
    data(){
        return{
            list:[]
        }  
    },
    //SSR的写法 asyncData处理组件数据 fetch是对vuex处理数据
    async asyncData() {
        let {status,data:{list}} = await axios.get('http://localhost:3000/city/list')
        if(status===200){
             return {
                 list
             }
        } 
    },
    // vue的写法调用数据
    // async mounted(){
    //     let self=this;
    //     let {status,data:{list}} = await axios.get('/city/list')
    //     if(status===200){
    //         self.list = list
    //     }      
    // }
}
</script>
<style lang="css">

</style>
