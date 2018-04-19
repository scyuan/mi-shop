<template>
	<div class="category">
		
		<!-- <back-header :title='title' ref='backHeader'></back-header> -->
		<transition name='loading-fade'>
			<div class="modal category-content" v-if='loading'>
				<div class="loading">
					<div class="loadEffect">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</transition>
		<div class="category-content">
			<div class="category-left" ref='leftView'>
				<ul>
					<li class="menuLi" v-for='(item, index ) in categoryMenuList' :class="{'menuLiActive':index === menuLiIndex}" @click='jumpTo(index)'><span>{{item}}</span></li>
				</ul>
			</div>
			<div class="category-right" @scroll='scroll()' ref='rightView'>
				<div class="category-box">
					<img src="https://ws4.sinaimg.cn/large/006tKfTcly1fqaqvftbwvj30dw05kq2w.jpg" alt="">
				</div>

				<div class="category-box" v-for='item in category_detail'>
					<p class="box-title"><span>{{item.title}}</span></p>
					<div class="box-content clearfix">
						<div class="box-item" v-for='p in item.data'>
							<img :src="p.src" alt="">
							<p>{{p.name}}</p>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import BackHeader from '@/components/BackHeader'
	export default{
		name:'Category',
		data(){
			return{
				title:'分类',
				menuLiIndex:0,
				categoryMenuList:[],
				category_detail:[],
				offset:[],
				header_show:false,
				loading:false,
			}
		},
		components:{
			BackHeader
		},
		methods:{
			scroll(){
				var scrollTop = this.$refs.rightView.scrollTop;
				//console.log(scrollTop);
				var index = this.indexOf(this.offset, scrollTop);
				if(index !== -1){
					this.menuLiIndex = index;
					// 是否需要通过scrollTop来移动左侧的menu list
					var oli = this.$refs.leftView.getElementsByTagName('li');
					console.log(oli[index].offsetTop / this.$refs.leftView.clientHeight);

					if(oli[index].offsetTop / this.$refs.leftView.clientHeight > 0.8){
						this.$refs.leftView.scrollTop = this.$refs.leftView.scrollTop + oli[index].clientHeight;
					}else if(oli[index].offsetTop / this.$refs.leftView.clientHeight < 0.2){
						this.$refs.leftView.scrollTop = this.$refs.leftView.scrollTop - oli[index].clientHeight;
					}
					
				}
			},
			jumpTo(index){
				this.menuLiIndex = index;
				this.$refs.rightView.scrollTop = this.offset[index];
				//this.$refs.backHeader.showMe();
			},
			indexOf(arr, num){
				for(let i=0;i<arr.length;i++){
					if(Math.abs(arr[i]-num)<=10){
						return i;
					}
				}
				return -1;
			},
			getData(){
				this.loading = true;
				this.$http.get('https://www.easy-mock.com/mock/5ad6eb960a6d0e1000b57d01/mi-shop/category_list').then(res=>{
					this.categoryMenuList = res.data.data.category;
					this.category_detail = res.data.data.content;
					this.loading = false;
					// 获取到数据后 计算offset
					this.getOffset();
					console.log(res.data);
				}).catch(err=>{
					console.log(err);
				})
			},
			getOffset(){
				this.$nextTick(()=>{
					var boxs = this.$refs.rightView.getElementsByClassName('category-box');
					for(let i=0;i<boxs.length;i++){
						this.offset.push(boxs[i].offsetTop);
					}
				})	
			}
		},
		// beforeRouteEnter(to, from, next){
		// 	next(vm=>{
		// 		vm.$refs.backHeader.showMe();

		// 	});
		// },
		// beforeRouteLeave(to, from, next){
		// 	this.$refs.backHeader.hideMe();
		// 	next();
		// },
		created(){
			// 获取数据
			this.getData();
		},
		mounted(){
			
		}

	}
</script>
<style scoped>
.loading-fade-enter,.loading-fade-leave-to{
	opacity: 0;
}
.loading-fade-enter-to,.loading-fade-leave{
	opacity: 1;
}
.loading-fade-enter-active,.loading-fade-leave-active{
	transition: all 0.3s;
}

.category{
	background: #fff;
}
.category-content{
	position: absolute;
	top: 1.5rem;
	bottom: 1.43rem;
	left: 0;
	right: 0;
	display: flex;
}
.category-content div{
	overflow-y: auto;
}
.category-content .category-left::-webkit-scrollbar {display:none}
.category-left{
	width: 2.133333rem;
	background: #fff;
	font-size: 0.373333rem;
	text-align: center;
	border-right: 1px solid #efefef;
}
.category-right{
	flex: 1;
	background: #fff;
}
.menuLi{
	height: 1.28rem;
	line-height: 1.28rem;
}
.menuLi span{
	transition: all 0.3s;
	color: rgba(0,0,0,0.6);
}
.category-box{
	padding: 0.133333rem 0.533333rem;
}
.category-box img{
	width: 100%;
	height: auto;
}
.box-title{
	text-align: center;
	font-size: 0.373333rem;
	padding-bottom: 0.48rem;
}
.box-title span{
	position: relative;
}
.box-title span::before{
	content: '';
	height: 1px;
	width: 0.533333rem;
	background: rgba(0,0,0,0.54);
	position: absolute;
	left: -0.666667rem;
	top: 0.24rem;

}
.box-title span::after{
	content: '';
	height: 1px;
	width: 0.533333rem;
	background: rgba(0,0,0,0.54);
	position: absolute;
	right: -0.666667rem;
	top: 0.24rem;
	
}
.box-item{
	float: left;
	width: 33.333%;
	text-align: center;
	font-size: 0.32rem;
	margin-bottom: 0.4rem;
}
.box-item img{
	width: 70%;
	height: auto;
}
.box-item p{
	line-height: 0.64rem;
	color: rgba(0,0,0,0.54);
}
.menuLiActive span{
	color: #ea625b;
	font-size: 0.48rem;
}
.modal{
	background: rgba(0,0,0,0.5);
	z-index: 10;
	top: 0;
}
.loading{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	width: 50px;
	height: 50px;
}
.loadEffect{ 
	width: 50px; 
	height: 50px; 
	position: relative; 
} 
.loadEffect span{ 
	display: inline-block; 
	width: 8px; 
	height: 8px; 
	border-radius: 50%; 
	background: #fff; 
	position: absolute; 
	-webkit-animation: 
	load 1.04s ease infinite; 
} 
@-webkit-keyframes load{ 
	0%{ opacity: 1; } 100%{ opacity: 0.1; } 
} 
.loadEffect span:nth-child(1){ 
	left: 0; 
	top: 50%; 
	margin-top:-3px; 
	-webkit-animation-delay:0.13s; 
} 
.loadEffect span:nth-child(2){ 
	left: 7px; 
	top: 7px; 
	-webkit-animation-delay:0.26s; 
} 
.loadEffect span:nth-child(3){ 
	left: 50%; 
	top: 0;
	margin-left: -3px; 
	-webkit-animation-delay:0.39s; 
} 
.loadEffect span:nth-child(4){ 
	top: 7px; 
	right:7px; 
	-webkit-animation-delay:0.52s; 
} 
.loadEffect span:nth-child(5){ 
	right: 0; 
	top: 50%; 
	margin-top:-3px; 
	-webkit-animation-delay:0.65s; 
} 
.loadEffect span:nth-child(6){ 
	right: 7px; 
	bottom:7px; 
	-webkit-animation-delay:0.78s; 
} 
.loadEffect span:nth-child(7){ 
	bottom: 0; 
	left: 50%; 
	margin-left: -3px; 
	-webkit-animation-delay:0.91s; 
} 
.loadEffect span:nth-child(8){ 
	bottom: 7px; 
	left: 7px; 
	-webkit-animation-delay:1.04s; 
}
</style>