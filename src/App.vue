<template>
  <div>
    <div class="app-content"> 
      
      <div :class="progress" class="progress"></div>

      <back-header :title='title' ref='backheader'></back-header>

      <transition :name='transitionName'>
        <keep-alive include='Category,Home,Personal,Product,Search,ShopCart' >  
          <router-view v-on:openbottom='openbottom()'></router-view>
        </keep-alive>
      </transition>

      <transition name='footerTransition'>
        <footer class="footer" v-show='footer_show'>
          <span v-for='(item, index) in footerMenuList' :class="{'menu_active':index === footerMenuIndex}">
            <i class="icon" v-html='item.icon' @click='open(index)'></i>
            {{item.text}}
          </span>
        </footer>
      </transition>
    </div>
    
    
  </div>
</template>

<script>
import BackHeader from '@/components/BackHeader'

import Rem from '@/assets/js/rem';

new Rem();
export default {
  name: 'App',
  components:{
    BackHeader
  },
  data(){
    return{
      title:'',
      footer_show:true,
      footerMenuIndex:0,
      transitionName:'slide-right',
      footerMenuList:[
        {
          text:'首页',
          icon:'&#xe699;',
          path:'/',
        },
        {
          text:'分类',
          icon:'&#xe635;',
          path:'/category'
        },
        {
          text:'购物车',
          icon:'&#xe899;',
          path:'/shopcart'
        },
        {
          text:'我的',
          icon:'&#xe64f;',
          path:'/me'
        },
      ]
    }
  },
  computed:{
    progress(){
      return this.$store.state.loading.status;
    }
  },
  watch:{
    'footerMenuIndex' (newIndex, oldIndex){
      if(newIndex>oldIndex){
        this.transitionName = 'slide-left'
      }else{
        this.transitionName = 'slide-right'
      }
    },

    '$route' (to, from){
      // 刚进来初始化 bottom菜单栏高亮
      switch(to.name){
        case 'Home':
          this.footerMenuIndex = 0;
          break;
        case 'Category':
          this.footerMenuIndex = 1;
          break;
        case 'ShopCart':
          this.footerMenuIndex = 2;
          break;
        case 'Personal':
          this.footerMenuIndex = 3;
          break;
      }

      // 判断下个页面是否是产品详情页面，需要隐藏底部菜单栏
      if(to.name=== 'Product' || to.name=== 'Search'){
        this.footer_show = false
        this.transitionName = 'slide-left'
      }
      // 从产品页面回到任意页面
      if(from.name=== 'Product' || from.name=== 'Search'){
        this.footer_show = true
        this.transitionName = 'slide-right'
      }

      // 进入购物车栏
      if(to.name ==='ShopCart'){

        // 判断购物车是否为空
        if(this.$store.state.shopcart.list.length !== 0){
          // 隐藏底部菜单栏
          this.footer_show = false
        }
      }


      // 退出购物车
      if(from.name === 'ShopCart' && to.name !== 'Search' && to.name !== 'Product'){
        this.footer_show = true;
      }


      /*
        控制头部backheader
      */
      if(to.name === 'Category' || to.name === 'ShopCart'){
        if(to.name === 'Category')
          this.title = "分类";
        else
          this.title = "购物车";
        this.$refs.backheader.showMe();
      }
      if(to.name !== 'Category' && to.name !=='ShopCart'){
        this.$refs.backheader.hideMe();
      }
    }
  },
  methods:{
    open(index){
      this.footerMenuIndex = index;
      this.$router.push({path:this.footerMenuList[index].path});
    },
    openbottom(){
      this.footer_show = true
    }
  }
}
</script>

<style>
.category,.home,.me,.product,.cart{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
@font-face {
  font-family: 'iconfont';  /* project id 624613 */
  src: url('//at.alicdn.com/t/font_624613_96ws9nsthmxfajor.eot');
  src: url('//at.alicdn.com/t/font_624613_96ws9nsthmxfajor.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_624613_96ws9nsthmxfajor.woff') format('woff'),
  url('//at.alicdn.com/t/font_624613_96ws9nsthmxfajor.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_624613_96ws9nsthmxfajor.svg#iconfont') format('svg');
}
.slide-left-leave-to{
  transform: translateX(-100%);
}
.slide-left-enter{
  transform: translateX(100%);
}
.slide-left-enter-to,.slide-left-leave{
  transform: translate(0);
}
.slide-left-enter-active,.slide-left-leave-active{
  transition: all .3s;
}

.slide-right-leave-to{
  transform: translateX(100%);
}
.slide-right-enter{
  transform: translateX(-100%);
}
.slide-right-enter-to,.slide-right-leave{
  transform: translate(0);
}
.slide-right-enter-active,.slide-right-leave-active{
  transition: all .3s;
}

.footerTransition-enter,.footerTransition-leave-to{
  transform: translateY(100%);
}
.footerTransition-enter-to,.footerTransition-leave{
  transform: translateY(0);
}
.footerTransition-enter-active,.footerTransition-leave-active{
  transition: all 0.3s;
}

.progress-slide-enter,.progress-slide-leave-to{
  transform: translateY(-100%);
}
.progress-slide-enter-to,.progress-slide-leave{
  transform: translateY(0);
}
.progress-slide-enter-active,.progress-slide-leave-avtive{
  transition: all 0.3s;
}

.icon{
  font-family: 'iconfont';
  font-style: normal;
}
html,body{
  width: 100%;
  height: 100%;
}
body,ul,li,p,div,*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: #f5f5f5;
  width: 10rem;
  margin: 0 auto;
  position: relative;
}
#app{
  height: 100%;
  background: #fff;
}
.swiper-container-horizontal > .swiper-pagination-bullets .white-bullet-active{
  background: #fff;
  opacity: 1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f5f5f5;
}
.app-content{
  padding-bottom: 1.44rem;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
.footer{
  height: 1.43rem;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 100%;
  box-shadow: 0px -1px 10px rgba(0,0,0,0.05);
  display: flex;
}
.footer span{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 0.32rem;
  color: #727272;
}
.footer span i{
  font-size: 0.533333rem;
  color: #222;
}
.clearfix::after{
  content: '';
  height: 0;
  display: block;
  clear: both;
}
.footer span.menu_active,.footer span.menu_active i{
  color: #ea625b;
}
.progress{
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background: rgb(255, 202, 43);
  z-index: 1000;
  transition: all 0.3s;
}
.loading{
  width: 100%;
}
.hide{
  display: none;
}
</style>
