<template>
    <div>
        <img @click="onImgClick" class="size" :src="url"/>
        <span>{{num}}</span>
    </div>
</template>
<script>
const testNum = 1
export default {
  name: 'Swiper',
  props: {
    url: {
      type: String,
      default: ''
    },
    num: {
      type: Number
    }
  },
  setup (props, context) {
    function onImgClick () {
      context.emit('sub-event', testNum)
    // alert()
    }
    return {
      onImgClick,
      testNum
    }
  }
}
</script>

<style scoped>
.size {
    width:100%;
}
</style>
