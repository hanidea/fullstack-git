<template>
  <div>
      <input placeholder="请输入任务名称" 
      v-model="value"
      @keydown.enter="enter"/>
  </div>
</template>
<script>
import { defineComponent,ref } from "vue";
export default defineComponent({
  name:'navHeader',
  setup(props,ctx){
    let value = ref('')
    let enter = () => {
      // 把输入框的内容传递给父组件
      ctx.emit('add',value.value)
      //清空输入框
      value.value=''
      //console.log(value.value)
    }
    return {
      value,
      enter
    }

  }
})
</script>
<style scoped lang="scss">
  input {
    margin-bottom:10px;
  }
</style>