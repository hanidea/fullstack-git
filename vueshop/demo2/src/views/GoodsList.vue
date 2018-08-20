<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span slot="bread">Goods</span>
    </nav-bread>
    <div class="accessory-result-page accessory-page">
          <div class="container">
            <div class="filter-nav">
              <span class="sortby">Sort by:</span>
              <a href="javascript:void(0)" class="default cur">Default</a>
              <a @click="sortGoods" href="javascript:void(0)" class="price">Price <svg class="icon-arrow-short" v-bind:class="{'sort-up':!sortFlag}"><symbol id="icon-arrow-short" viewBox="0 0 25 32">
                <title>arrow-short</title>
                <path class="path1" d="M24.487 18.922l-1.948-1.948-8.904 8.904v-25.878h-2.783v25.878l-8.904-8.904-1.948 1.948 12.243 12.243z"></path>
              </symbol><use xlink:href="#icon-arrow-short"></use></svg></a>
              <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
            </div>
            <div class="accessory-result">
              <!-- filter -->
              <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
                <dl class="filter-price">
                  <dt>Price:</dt>
                  <dd><a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}" @click="setAll()">All</a></dd>
                  <dd v-for="(price,index) in priceFilter" >
                    <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur':priceChecked==index}">{{price.startPrice}} - {{price.endPrice}}</a>
                  </dd>
                </dl>
              </div>

              <!-- search result accessories list -->
              <div class="accessory-list-wrap">
                <div class="accessory-list col-4">
                  <ul>
                    <!-- <li v-for="(item, index) in goodsList">
                      <div class="pic">
                        <a href="#"><img v-lazy="'static/'+item.productImg" alt=""></a>
                      </div>
                      <div class="main">
                        <div class="name">{{item.productName}}</div>
                        <div class="price">{{item.productPrice}}</div>
                        <div class="btn-area">
                          <a href="javascript:;" class="btn btn--m">加入购物车</a>
                        </div>
                      </div>
                    </li> -->
                    <li v-for="(item, index) in goodsList">
                      <div class="pic">
                        <a href="#"><img v-lazy="'static/'+item.productImage" alt=""></a>
                      </div>
                      <div class="main">
                        <div class="name">{{item.productName}}</div>
                        <div class="price">{{item.salePrice}}</div>
                        <div class="btn-area">
                          <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                    <!-- 加载中... -->
                    <img src="./../assets/loading-spinning-bubbles.svg" v-show="loading"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    <!-- <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div> -->
    <modal v-bind:mdShow="mdShow" v-on:close="closeModal">
      <p slot="message">
        请先登录，否则无法加入到购物中
      </p>
      <div slot="btnGroup">
          <a class="btn btn--m" href="javascript:;" @click="mdShow = false">关闭</a>
      </div>
    </modal>
    <modal v-bind:mdShow="mdShowCart" v-on:close="closeModal">
      <p slot="message">
        <svg class="navbar-cart-logo">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
        </svg>
        <span>加入购物车成功</span>
      </p>
      <div slot="btnGroup">
          <a class="btn btn--m" href="javascript:;" @click="mdShowCart = false">继续购物</a>
          <router-link class="btn btn--m" href="javascript:;" to="/cart">查看购物车</router-link>
      </div>
    </modal>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import './../assets/css/base.css'
import './../assets/css/product.css'
import NavHeader from '@/components/Header.vue'
import NavFooter from '@/components/Footer.vue'
import NavBread from '@/components/NavBread.vue'
import Modal from '@/components/Modal.vue'
import axios from 'axios'
export default {
  data () {
    return {
      goodsList:[],
      sortFlag:true,
      page:1,
      pageSize:8,
      busy:true,
      loading:false,
      mdShow:false,
      mdShowCart:false,
      priceFilter:[
        {
          startPrice:'0,00',
          endPrice:'500.00'
        },
        {
          startPrice:'500.00',
          endPrice:'1000.00'
        },
        {
          startPrice:'1000.00',
          endPrice:'5000.00'
        }
      ],
      priceChecked:'all',
      filterBy:false,
      overLayFlag:false
    }
  },
  components:{
    NavHeader,NavFooter,NavBread,Modal
  },
  mounted:function(){
    this.getGoodsList();
  },
  methods:{
    getGoodsList(flag){
      var param = {
        page:this.page,
        pageSize:this.pageSize,
        sort:this.sortFlag?1:-1,
        priceLevel:this.priceChecked
      }
      this.loading = true
      axios.get("/goods/list",{
        params:param
      }).then((result)=>{
        var res = result.data;
        this.loading = false
        //console.log(res.status);
        if(res.status=="0"){
          if(flag){
            this.goodsList = this.goodsList.concat(res.result.list);
            if(res.result.count==0){
              this.busy = true;
            }else{
              this.busy = false;
            }
          }else{
            this.goodsList = res.result.list;
            this.busy = false;
          }
        }else{
          this.goodsList = [];
        }
      })
    },
    sortGoods(){
      this.sortFlag = ! this.sortFlag;
      this.page = 1,
      this.getGoodsList();
    },
    loadMore(){
      this.busy = true;
      setTimeout(() => {
           this.page++;
           this.getGoodsList(true);
        }, 500);
    },
    addCart(productId){
      axios.post("/goods/addCart",{
        productId:productId
      }).then((res)=>{
        if(res.data.status=="0"){
          this.mdShowCart = true;
          //alert("加入成功")
        }else{
          //alert("msg:"+res.data.msg)
          this.mdShow = true;
        }
      })
    },
    closeModal(){
       this.mdShow = false;
       this.mdShowCart = false;
    },
    showFilterPop(){
       this.filterBy=true,
       this.overLayFlag=true
    },
    setPriceFilter(index){
      this.priceChecked=index,
      this.getGoodsList(),
      this.page = 1;
      this.closePop()
    },
    setAll(){
      this.priceChecked="all",
      this.getGoodsList(),
      this.page = 1;
      this.closePop()
    },
    closePop(){
       this.filterBy=false,
       this.overLayFlag=false
    }
  }
}
</script>
<style>
.sort-up{
  transform:rotate(180deg);
  transition: all .3s ease-out
}
.btn:hover{
  background-color: #ffe5e6;
  transition: all .3s ease-out
}
</style>
