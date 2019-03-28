<template>
    <div>
        <h1>vuejs</h1>
        <Todolist></Todolist>
    </div>
</template>
<script>
import Todolist from '@/components/Todolist'
export default {
  components: {
    Todolist
  }
}
</script>
<style scoped>
h1{
    color:red;
}
</style>

