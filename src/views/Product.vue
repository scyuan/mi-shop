<template>
	<div class="product" ref='wrapper'>
		<div class="content">
			<div class="product-img-wrap">
				<i class="icon back" @click='$router.back()'>&#xe624;</i>
				<swiper :options="swiperOption" ref="mySwiper">
				    <!-- slides -->
				    <swiper-slide v-for='item in product.banner'>
				    	<img v-lazy="item" alt="">
				    	
				    </swiper-slide>
				    
				    <!-- Optional controls -->
				    <div class="swiper-pagination"  slot="pagination"></div>
				</swiper>
			</div>

			<div class="product-panel">
				<p class="desc">{{product.name}}</p>
				<p class="activity">{{product.desc.cuxiao}}</p>
				<p class="more-desc">{{product.desc.normal}}</p>
				<p class="price"><span class="price-now">￥{{product.price}}</span><span class="price-before">￥{{product.origin_price}}</span><span class="price-activity">直降1000元</span></p>
				<div class="line">
					<span>促销</span>
					<p><span class="z">赠品</span>赠吃到饱卡</p>
					<i class="icon">&#xe64a;</i>
				</div>
			</div>
			<div class="buy-panel">
				<div class="line border">
					<span>已选</span>
					<p>小米Note3 4GB+64GB 黑色 x1</p>
					<i class="icon">&#xe64a;</i>
				</div>
				<div class="line">
					<span>送至</span>
					<p>上海市 松江区 <span class="s">有现货</span></p>
					<i class="icon">&#xe64a;</i>
				</div>
				<div class="line tuihuo">
					
					<p><i class="icon">&#xe602;</i>支持7天无理由退货</p>
					
				</div>
			</div>
			<div class="panel line">
				<span>配件</span>
				<p></p>
				<i class="icon">&#xe64a;</i>
			</div>

			<div class="product-bg">
				<img v-for='img in product.big_img' v-lazy="img" alt="">
			</div>
			
		</div>
		<div class="add-to-cart">
			<div class="left-icon">
				<p class="home-i" @click='go("/")'>
					<i class="icon">&#xe626;</i>
					<span>首页</span>
				</p>
				<p class="cart-i" @click='go("/shopcart")' ref='cart' id='cart'>
					<i class="icon">&#xe899;</i>
					<span>购物车</span>
					<span class="count" v-show='count > 0'>{{count}}</span>
				</p>
			</div>
			<div class="add" @click='addToCart()'>
				<div class="ball" ref='ball' id='ball'></div>
				加入购物车
			</div>
		</div>
		<transition name="fade">
			<div class="modal" v-if='show_modal'>
				<p>加载中...</p>
			</div>
		</transition>
	</div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Parabola from '@/util/parabola'
import $ from 'jquery'
import BScroll from 'better-scroll'
	export default{
		name:'Product',
		data(){
			return{
				show_modal:true,
				product:{
					banner:[],
					name:'',
					desc:{
						cuxiao:'',
						normal:''
					},
					big_img:''
				},
				// product:'',
				img_list:[
					"//i8.mifile.cn/v1/a1/f6b42e48-8af9-c1c1-5df2-eb1973499aae.jpg?w=1080&h=1735&s=192.6",
					"//i8.mifile.cn/v1/a1/eb3d5e39-000d-bfb9-acce-e346876cfa94.jpg?w=1080&h=1387&s=171.9",
					"//i8.mifile.cn/v1/a1/5bb89342-dce9-82d4-59c7-a322376fc1a8.jpg?w=1080&h=1735&s=164",
					"//i8.mifile.cn/v1/a1/8ba93f97-a966-088d-7aa0-21f3a50f08ea.jpg?w=1080&h=1201&s=120.4",
					"//i8.mifile.cn/v1/a1/1f2ccbc5-8a7c-39ab-9819-5aec14d533b5.jpg?w=1080&h=1445&s=150.1",
					"//i8.mifile.cn/v1/a1/9356b62d-e15b-a208-72f0-709fe24f6c48.jpg?w=1080&h=996&s=193.1",
					"//i8.mifile.cn/v1/a1/a5b0856b-888b-dc1b-a35c-2981dd0e35d3.jpg?w=1080&h=1445&s=169",
					"//i8.mifile.cn/v1/a1/f8e52783-b598-2dfd-7057-52c285515119.jpg?w=1080&h=1735&s=191.4"
				],
				banner_list:[
					
				],
				swiperOption: {
				  lazy: {
				    loadPrevNext: true,
				  },
				  // 最左最右禁止滑动
		          resistanceRatio : 0,
		          pagination:{
		          	el:'.swiper-pagination',
		          	clickable:true,
		          	bulletActiveClass: 'white-bullet-active',
		          }
		        }
			}
		},
		computed:{
			count(){
				var sum = 0;
				for(let i=0;i<this.$store.state.shopcart.list.length;i++){
					sum = sum + this.$store.state.shopcart.list[i].count;
				}
				return sum;
			}
		},
		methods:{
			go(href){
				this.$router.push({path:href});
			},
			addToCart(){

				var _this = this;
				this.$refs.ball.style = '';
				this.$refs.ball.style.display = 'block';
				var parabola = new Parabola({
		          start: {
		            //left: _this.$refs.ball.offsetLeft,
		            //top: _this.$refs.ball.offsetTop
		            left:$('#ball').offset().left,
		            top:$('#ball').offset().top
		          },
		          end: {
		            //left: _this.$refs.cart.offsetLeft,
		            //top: _this.$refs.cart.offsetTop
		            left:$('#cart').offset().left+20,
		            top:$('#cart').offset().top
		          },
		          duration: 300,
		          // 每帧动画 移动小球 通过transform
		          onStep (pos) {
		            var position = 'translate3d('+(pos.x)+'px,'+(pos.y)+'px, 0px)'
		           	

		            _this.$refs.ball.style.webKitTransform = position
		            _this.$refs.ball.style.transform = position
		          },
		          // 动画结束回调
		          onFinish (pos) {
		            _this.$refs.ball.style.display = 'none'

		          	var item = {
						id:10001,
						name:'小米Note3 人脸解锁',
						href:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e98be403a5f4277adba84acaecb9c76.jpg?bg=6D96C7',
						price:1999,
						count:1
					}
					_this.$store.commit('addOne',item);
		          }
		        });

        		parabola.start();
			},
			getData(){
				this.$http.get(" https://www.easy-mock.com/mock/5ad6eb960a6d0e1000b57d01/mi-shop"+this.$route.path)
				.then(res=>{
					console.log(res.data);
					// this.banner_list = res.data.data.banner;

					this.product = res.data.data;
					this.show_modal = false;
				})
			}
		},
		components:{
			swiper, swiperSlide
		},
		created(){
			this.getData();
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
.product{
	overflow-y: auto;
}
.product-img-wrap{
	position: relative;
}
.product-img-wrap img{
	width: 100%;
	height: auto;
	vertical-align: top;
}
.product-panel{
	background: #fff;
	padding: 0.266667rem 0.4rem;
	font-size: 0.32rem;
	margin-bottom: 0.213333rem;
	padding-bottom: 0;
}
.product-panel .desc{
	font-size: 0.48rem;
}
.product-panel .activity{
	color: rgb(255,74,0);
	margin-top: 0.133333rem;
}
.product-panel .more-desc{
	color: rgb(117,117,117);
	margin-top: 0.133333rem;
}
.product-panel .price{
	margin-top: 0.133333rem;
}
.price span{
	margin-right: 0.133333rem;
}
.price .price-now{
	font-size: 0.533333rem;
	color: rgb(255,74,0);
	font-weight: bold;
}
.price .price-before{
	text-decoration: line-through;
	font-size: 0.373333rem;
	color: #999;
}
.price .price-activity{
	padding: 0 0.106667rem;
	background: rgb(255,74,0);
	color: #fff;
	border-radius: 0.133333rem;
}
.line{
	height: 0.96rem;
	line-height: 0.96rem;
	position: relative;
	font-size: 0.32rem;
}
.border{
	border-bottom: 1px solid #eee;
}
.line>span{
	width: 1.44rem;
	float: left;
	color: #aaa;
}
.line>i{
	height: 0.96rem;
	width: 0.96rem;
	float: right;
	text-align: right;
}
.line>p{
	width: 100%;
	position: absolute;
	padding-left: 1.173333rem;
}
.line>p .z{
	color: rgb(255,74,0);
	border: 1px solid rgb(255,74,0);
	padding: 0 0.133333rem;
	margin-right: 0.133333rem;
}
.line>p .s{
	color: rgb(255,74,0);
	margin-left: 0.133333rem;
}
.buy-panel{
	background: #fff;
	margin-bottom: 0.106667rem;
	padding: 0 0.4rem;
}
.panel{
	background: #fff;
	padding: 0 0.4rem;
}
.tuihuo>p{
	color: #aaa;
}

.product-bg img{
	width: 100%;
	height: auto;
	vertical-align: top;
	transition: all 0.3s;
}
.add-to-cart{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 1.44rem;
	
	box-shadow: 1px -1px 10px rgba(0,0,0,0.1);
}
.left-icon{
	float: left;
	height: 100%;
	width: 4.0rem;
	background: #fff;
	padding: 0.133333rem 0;
	text-align: center;
	color: #aaa;
}
.add{
	width: 100%;
	background: rgb(255,74,0);
	color: #fff;
	height: 100%;
	font-size: 0.4rem;
	text-align: center;
	line-height: 1.44rem;
}
.ball{
	position: absolute;
	top: 30%;
	left: 65%;
	width: 0.533333rem;
	height: 0.533333rem;
	border-radius: 50%;
	background: rgb(255,74,0);
	display: none;
}
.left-icon p:nth-child(1){
	border-right: 1px solid #eee;
}
.left-icon p i{
	font-size: 0.533333rem;
	display: block;
	padding-top: 0.133333rem;
}
.left-icon p{
	float: left;
	width: 50%;
	height: 100%;
	font-size: 0.32rem;
}
.back{
	width: 0.853333rem;
	height: 0.853333rem;
	display: block;
	position: absolute;
	left: 0.4rem;
	top: 0.4rem;
	border-radius: 0.426667rem;
	background: rgba(0,0,0,0.5);
	color: #fff;
	font-size: 0.426667rem;
	text-align: center;
	line-height: 0.853333rem;
	z-index: 10;
}
.cart-i{
	position: relative;
}
.count{
	position: absolute;
	right: 0.266667rem;
	top: 0;
	padding:0 0.133333rem;
	background: rgb(255,74,0);
	color: #fff;
	border-radius: 0.8rem;
}
.modal{
	position: fixed;
    left: 0;
    top: 0;
    bottom: 1.43rem;
    right: 0;
    background: rgba(0,0,0,0.8);
    color: #fff;
    padding-top: 5.333333rem;
    text-align: center;
   	font-size: 0.533333rem;
}
</style>