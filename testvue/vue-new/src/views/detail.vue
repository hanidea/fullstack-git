<template>
  <div class="detail">
    <h1>This is an detail page</h1>
    <button @click="onClick">去子页面</button>
  </div>
</template>

<script>
import router from '@/router'
import store from '@/store/index'
export default {
  name: 'Detail',
  components: {

  },
  setup (props, context) {
    console.log(router.currentRoute.value.params.id)
    function onClick () {
      // context.emit('change-view', {
      //   name: 'SubDetail',
      //   params: {}
      // })
      store.commit('changeView', {
        routerParams: {
          name: 'SubDetail'
        }
      })
    }
    return {
      onClick
    }
  }

}
</script>
