<template>
	<div class="home">
		<header class="home-header">
			<div class="header-search">
				<div class="header-search-left">
					<img src="@/assets/img/logo.png" alt="">
				</div>
				<div class="header-search-mid">
					<div class="fake-input" @click='go("/search")'>
						<i class="icon">&#xe607;</i>
						搜索商品名称
					</div>
				</div>
				<div class="header-search-right">
					<i class="icon" @click='$router.push({path:"/me"})'>&#xe64f;</i>
				</div>
			</div>
			<div class="nav" ref='nav'>

				<div class="nav-item" :class="{'active' :index === navActiveIndex}" v-for='(item, index) in nav_items' @click='openNav(index)'>
					<span>{{item.text}}</span>
				</div>
				
			</div>
		</header>
		<div class="scroll-box wrapper" ref='wrapper'>
			<div class="content">
				<swiper :options="swiperOption" ref="mySwiper">
				    <!-- slides -->
				    <swiper-slide v-for='item in banner_list' >
				    	<img :data-src="item.src" class="swiper-lazy" @click='$router.push({path:"/product/1001"})'>
	            		<div class="swiper-lazy-preloader"></div>
				    </swiper-slide>
				    
				    <!-- Optional controls -->
				    <div class="swiper-pagination"  slot="pagination"></div>
				</swiper>

				<div class="nav-mid">
					<a href="javascript:;" v-for ='img in nav_mid'><img v-lazy="img" alt=""></a>
				</div>

				<div class="zhijiang clearfix">
					<div class="zj-left">
						<img v-lazy="zhijiang[0]" alt="">
					</div>
					<div class="zj-right">
						<img v-lazy="zhijiang[1]" alt="">
						<img v-lazy="zhijiang[2]" alt="">
					</div>
					
				</div>
				<div class="tj" v-for='img in tj_imgs'>
					<img v-lazy='img' alt="">
				</div>
				
				<div class="tj clearfix">
					<div class="tj-items" v-for='(item,index) in tj_items' :class="{'left':index%2===0,'right':index%2!==0}" @click='$router.push({path:item.href})'>
						<img v-lazy="item.img">
						<p class="title">{{item.name}}</p>
						<p class="con">{{item.desc}}</p>
						<p class="price">￥{{item.price}} <span class="origin_price" v-show='item.origin_price !== ""'>￥{{item.origin_price}}</span></p>
					</div>
				</div>
			</div>
			
		</div>
		
	</div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import BScroll from 'better-scroll'
	export default{
		name:'Home',
		data(){
			return{
				nav_mid:[
					"//i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29!144x152.webp",
					"//i8.mifile.cn/v1/a1/d29e748c-0177-5b4c-d2ab-401070713bac!144x152.webp",
					"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9173298cc0297ce1803c43485e525358.jpg?thumb=1&w=144&h=152",
					"//i8.mifile.cn/v1/a1/e560f98a-48bb-25a1-daa2-72bff8cc7c69!144x152.webp",
					"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/938f75d98244629b0d29bfc9c4323f8d.png?thumb=1&w=144&h=152"
				],
				zhijiang:[
					"http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114551289342.png",
					"http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&w=358&h=252",
					"http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114550596671.png"

				],
				tj_imgs:[
					"http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/a589d24e74c4d96191dd46635054e804.jpg",
					"http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011115034174111.png",
					"http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011115033089933.png"
				],
				navActiveIndex:0,
				tj_items:[
					 
				],
				nav_items:[
					{
						text:'推荐'
					},
					{
						text:'手机'
					},
					{
						text:'智能'
					},
					{
						text:'电视'
					},
					{
						text:'电脑'
					},
					{
						text:'全面屏'
					},
					{
						text:'生活周边'
					},
					{
						text:'盒子'
					},
				],
				banner_list:[
				  {
		            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/01.png',
		            href: '/product/1001'
		          },
		          {
		            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/02.jpg',
		            href: '/product/1002'
		          },
		          {
		            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/03.jpg',
		            href: '/product/1003'
		          },
		          {
		            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/04.jpg',
		            href: '/product/1004'
		          }
		        ],
				swiperOption: {
				  lazy: {
				    loadPrevNext: true,
				  },
				  loop:true,
		          autoplay:{
		          	stopOnLastSlide:false,
		          	delay:3000,
		          	disableOnInteraction:false
		          },
		          // 最左最右禁止滑动
		          resistanceRatio : 0,
		          pagination:{
		          	el:'.swiper-pagination',
		          	clickable:true,
		          	bulletActiveClass: 'white-bullet-active',
		          },
				  
		        }
			}
		},
		methods:{
			openNav(index){
				this.navActiveIndex = index ;
				console.log(this.$refs.nav.width);
			},
			detail(href){
				this.$router.push({path:href});
			},
			go(href){
				this.$router.push({path:href});
			},
			getTuijian(){
				var _this = this;

				this.$http.get('https://www.easy-mock.com/mock/5ad6eb960a6d0e1000b57d01/mi-shop/home_tj')
				.then(res=>{
					this.tj_items = res.data.data.home_tj;
					// console.log(res.data.data.home_tj);

					// 然后重新计算better-scroll的高度
					_this.$nextTick(()=>{
						if(!_this.scroll){
							_this.scroll = new BScroll(_this.$refs.wrapper,{
								click:true
							})
						}else{
							_this.scroll.refresh();
						}
					})
				})
			}
		},
		components:{
			swiper, swiperSlide
		},
		activated(){
			this.swiper.autoplay.start();
		},
		computed: {
	      swiper() {
	        return this.$refs.mySwiper.swiper
	      }
	    },
	    created(){
	    	this.getTuijian();
	    },
	    mounted(){
	    	var _this = this;
	    	this.$nextTick(() => {
		    	if(!_this.scroll){
					_this.scroll = new BScroll(_this.$refs.wrapper,{
						click:true
					})
				}else{
					_this.scroll.refresh();
				}
		    })
	    }
	}
</script>

<style scoped>
.home-header{
	background: #f2f2f2;
	box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
	position: relative;
	z-index: 9999;
}
.header-search{
	height: 1.3333rem;
	display: flex;
}
.header-search>div{
	display: flex;
	align-items: center;
	justify-content: center;
}
.header-search-left{
	width: 0.9rem;
	margin: 0 0.2rem;
}
.header-search-right{
	width: 0.9rem;
	margin: 0 0.2rem;
	color: #727272;
	font-size: 0.693rem;
}
.header-search-left img{
	width: 80%;
	height: auto;
	line-height: 50px;
}
.header-search-mid{
	flex: 1;
}
.header-search-mid .fake-input{
	height: 0.8rem;
	align-items: center;
	border-radius: 0.04rem;
	border: 1px solid #e5e5e5;
	background: #fff;
	display: flex;
	color: #929292;
	width: 100%;
	font-size: 0.37rem;
}
.fake-input i{
	display: block;
	height: 0.8rem;
	width: 0.8rem;
	text-align: center;
	line-height: 0.8rem;
}
.nav{
	font-size: 0.26rem;
	overflow-x: auto;
	background: #f2f2f2; 
	white-space: nowrap;
}
.nav::-webkit-scrollbar{
	height: 0;
	width: 0;
}
.nav-item{
	padding: 0 0.3rem;
	display: inline-block;
	position: relative;
}
.nav-item span{
	line-height: 1rem;
	font-size: 0.38rem;
	color: #525252;
	height: 100%;
	display: inline-block;
}
.nav .active span{
	color: rgb(237, 91, 0);
}
.nav .active span{
	border-bottom: 2px solid rgb(237, 91, 0);
}
.swiper-slide{
	width: 100%;
	height: 5rem;
	background-color: #c2c2c2;
}
.swiper-slide img{
	width: 100%;
	height: auto;
}
.swiper-container-horizontal > .swiper-pagination-bullets{
	bottom: -4px;
}

.nav-mid{
	display: flex;
	background: #fff;
}
.nav-mid a{
	flex: 1;
}
.nav-mid a img{
	height: auto;
	width: 100%;
	vertical-align: top;
}
.zj-left{
	float: left;
	width: 4.95rem;
	margin-right: 0.05rem;
}
.zj-left img,.zj-right img{
	width: 100%;
	height: auto;
	vertical-align: top;
}
.zj-right{
	float: right;
	width: 4.95rem;
	margin-left: 0.05rem;
}
.zj-right img:nth-child(1){
	margin-bottom: 0.05rem;
}

.tj{
	margin-top: 0.16rem;
	background: #fff;
}
.tj img{
	width: 100%;
	height: auto;
	vertical-align: middle;

}
.tj-items{
	width: 50%;
	float: left;
	text-align: left;
	margin-bottom: 20px;
	box-sizing: border-box;
}
.tj-items img{
	width: 100%;
	height: auto;
}
.left{
	padding-right: 0.05rem;
}
.right{
	padding-left: 0.05rem;
}
.tj-items p{
	padding-left: 10px;
	margin: 0;
	font-size: 0.373333rem;
}
.tj-items .title{
	margin-top: 0.133333rem;
}
.tj-items .con{
	font-size: 0.32rem;
	color: #a2a2a2;
	font-weight: 300;
}
.tj-items .price{
	color: #ea625b;
}
.tj-items .origin_price{
	color: #ccc;
	text-decoration: line-through;
	font-size: 0.32rem;
}
.scroll-box{
	position: absolute;
	left: 0;
	right: 0;
	top: 2.3833rem;
	bottom: 1.43rem;
	overflow-y: auto;
}
</style>

