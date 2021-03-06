import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
import Address from '@/views/Address'
import OrderConfirm from '@/views/OrderConfirm'
import OrderSuccess from '@/views/OrderSuccess'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  mode:'hash',
  // mode:'history',
  routes: [
    // {
    //   path: '/helloworld/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      // path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      // path: '/goods/:goodsId/user/:name',
      //path: '/goods/',
      path: '/',
      name: 'GoodsList',
      component: GoodsList,
      // components:{
      //   default:GoodsList,
      //   title:Title,
      //   img:Image
      // }
      // children:[
      //   {
      //     path:'title',
      //     name:'title',
      //     component:Title
      //   },
      //   {
      //     path:'img',
      //     name:'img',
      //     component:Image
      //   }
      // ]
    },
    {
      path:'/Cart',
      name: 'Cart',
      component:Cart
    },
    {
      path:'/Address',
      name: 'Address',
      component:Address
    },
    {
      path:'/OrderConfirm',
      name: 'OrderConfirm',
      component:OrderConfirm
    },
    {
      path:'/OrderSuccess',
      name: 'OrderSuccess',
      component:OrderSuccess
    }
    // {
    //   path:'/cart/:cartId',
    //   name:'cart',
    //   component:Cart
    // }
  ]
})
