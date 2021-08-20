<template>
    <div>
        <img class="size" :src="url"/>
        <span>{{num}}</span>
    </div>
</template>
<script>

export default {
  name: 'Swiper',
  props: {
    url: {
      type: String,
      default: ''
    },
    num: {
      type: Number
    },
    obj: {
      type: Object
    }
  },
  setup (props) {
    // props.num = props.num + 1
    // props.obj.name = '666'
    console.log(props.num)
    console.log(props.obj)
  }
}
</script>

<style scoped>
.size {
    width:100%;
}
</style>
