<template>
    <div class="b">page b {{$store.state.count.count}}
        <button type="button" name="button" @click="add(2)">增加</button>
    <button type="button" name="button" @click="reduce">减少</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    methods:mapActions('count',['add','reduce'])

}
</script>
<style lang="">
    
</style>