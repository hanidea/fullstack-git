<template>
  <div class="home">
    <img class="top-theme" alt="Vue logo" src="@/assets/title@interest.png" />
    <swipe @sub-event="onSwiperClick" :url="m3"/>
    <!-- <router-link to="/detail">Detail</router-link> -->
    <button @click="onChangeComponent('keep')">点击切换到Keep组件</button>
    <button @click="onChangeComponent('static')">点击切换到Static组件</button>
    <keep-alive exclude="Keep">
    <component v-bind:is="currentComponent"/>
    </keep-alive>
    <!-- <keep/>
    <static/> -->
  </div>
</template>

<script>

import Swipe from '@/components/swipe.vue'
import m3 from '@/assets/m3.png'
import Static from '@/components/static'
import Keep from '@/components/keep'
import store from '@/store/index'
import { ref } from 'vue'

let currentComponent = ref('keep')

export default {
  name: 'Home',
  components: {
    Swipe,
    Static,
    Keep
  },
  setup (props, context) {
    function onChangeComponent (event) {
      console.log(event)
      currentComponent.value = event
    }
    function onSwiperClick (event) {
      // context.emit('change-view', {
      //   name: 'Detail',
      //   params: {
      //     id: 3
      //   }
      // })
      // console.log(event)
      // alert(store.state.url)
      // store.commit('changeView', 'SubDetail')
      store.commit('changeView', {
        routerParams: {
          name: 'Detail',
          params: {
            id: 3
          }
        }
      })
      console.log(store.state.routerParams)
    }
    return {
      m3,
      onSwiperClick,
      currentComponent,
      onChangeComponent
    }
  }
}
</script>
