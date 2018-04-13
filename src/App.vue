<template>
  <div>
    
    <div class="app-content">
      <router-view></router-view>


      <footer class="footer">
      <span v-for='(item, index) in footerMenuList' :class="{'menu_active':index === footerMenuIndex}">
        <i class="icon" v-html='item.icon' @click='open(index)'></i>
        {{item.text}}
      </span>
     
    </footer>
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
      footerMenuIndex:0,
      footerMenuList:[
        {
          text:'首页',
          icon:'&#xe699;'
        },
        {
          text:'分类',
          icon:'&#xe635;'
        },
        {
          text:'购物车',
          icon:'&#xe899;'
        },
        {
          text:'我的',
          icon:'&#xe64f;'
        },
      ]
    }
  },
  methods:{
    open(index){
      this.footerMenuIndex = index;
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 624613 */
  src: url('//at.alicdn.com/t/font_624613_nzjvj0lnsv23mcxr.eot');
  src: url('//at.alicdn.com/t/font_624613_nzjvj0lnsv23mcxr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_624613_nzjvj0lnsv23mcxr.woff') format('woff'),
  url('//at.alicdn.com/t/font_624613_nzjvj0lnsv23mcxr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_624613_nzjvj0lnsv23mcxr.svg#iconfont') format('svg');
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
