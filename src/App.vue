<template>
  <div>
    
    <div class="app-content">
      <transition :name='transitionName'>
        <router-view></router-view>
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
import Rem from '@/assets/js/rem';

new Rem();
export default {
  name: 'App',
  data(){
    return{
      footer_show:true,
      footerMenuIndex:0,
      transitionName:'slide-left',
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
  watch:{
    'footerMenuIndex' (newIndex, oldIndex){
      if(newIndex>oldIndex){
        this.transitionName = 'slide-left'
      }else{
        this.transitionName = 'slide-right'
      }
    },
    '$route' (to, from){
      // 判断下个页面是否是产品详情页面，需要隐藏底部菜单栏
      if(to.name=== 'Product' || to.name=== 'Search'){
        this.footer_show = false
      }
      // 从产品页面回到任意页面
      if(from.name=== 'Product' || from.name=== 'Search'){
        this.footer_show = true
      }
    }
  },
  methods:{
    open(index){
      this.footerMenuIndex = index;
      this.$router.push({path:this.footerMenuList[index].path});
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
  src: url('//at.alicdn.com/t/font_624613_ifg9lrsedwunb3xr.eot');
  src: url('//at.alicdn.com/t/font_624613_ifg9lrsedwunb3xr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_624613_ifg9lrsedwunb3xr.woff') format('woff'),
  url('//at.alicdn.com/t/font_624613_ifg9lrsedwunb3xr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_624613_ifg9lrsedwunb3xr.svg#iconfont') format('svg');
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
.white-bullet-active{
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
</style>
