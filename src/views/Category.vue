<template>
	<div class="category">
		<back-header :title='title'></back-header>
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
				<div class="category-box">
					<p class="box-title"><span>手机</span></p>
					<div class="box-content clearfix">
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
					</div>
				</div>
				<div class="category-box">
					<p class="box-title"><span>电视</span></p>
					<div class="box-content clearfix">
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
					</div>
				</div>
				<div class="category-box">
					<p class="box-title"><span>电脑</span></p>
					<div class="box-content clearfix">
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
					</div>
				</div>
				<div class="category-box">
					<p class="box-title"><span>家电</span></p>
					<div class="box-content clearfix">
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
					</div>
				</div>
				<div class="category-box">
					<p class="box-title"><span>路由</span></p>
					<div class="box-content clearfix">
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
					</div>
				</div>
				<div class="category-box">
					<p class="box-title"><span>智能</span></p>
					<div class="box-content clearfix">
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
					</div>
				</div>
				<div class="category-box">
					<p class="box-title"><span>儿童</span></p>
					<div class="box-content clearfix">
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
					</div>
				</div>
				<div class="category-box">
					<p class="box-title"><span>电源</span></p>
					<div class="box-content clearfix">
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
					</div>
				</div>
				<div class="category-box">
					<p class="box-title"><span>耳机</span></p>
					<div class="box-content clearfix">
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
					</div>
				</div>
				<div class="category-box">
					<p class="box-title"><span>音箱</span></p>
					<div class="box-content clearfix">
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
					</div>
				</div>
				<div class="category-box">
					<p class="box-title"><span>礼品</span></p>
					<div class="box-content clearfix">
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
					</div>
				</div>
				<div class="category-box">
					<p class="box-title"><span>生活</span></p>
					<div class="box-content clearfix">
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
					</div>
				</div>
				<div class="category-box">
					<p class="box-title"><span>服务</span></p>
					<div class="box-content clearfix">
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
					</div>
				</div>
				<div class="category-box">
					<p class="box-title"><span>礼品卡</span></p>
					<div class="box-content clearfix">
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
					</div>
				</div>
				<div class="category-box">
					<p class="box-title"><span>零售店</span></p>
					<div class="box-content clearfix">
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
						</div>
						<div class="box-item">
							<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png" alt="">
							<p>小米5s</p>
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
		data(){
			return{
				title:'分类',
				menuLiIndex:0,
				categoryMenuList:["新品","手机","电视","电脑","家电","路由","智能","儿童","电源","耳机","音箱","礼品","生活","服务","米粉卡","零售店"],
				offset:[]
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
			},
			indexOf(arr, num){
				for(let i=0;i<arr.length;i++){
					if(Math.abs(arr[i]-num)<=10){
						return i;
					}
				}
				return -1;
			}
		},
		mounted(){

			var boxs = this.$refs.rightView.getElementsByClassName('category-box');
			for(let i=0;i<boxs.length;i++)
				this.offset.push(boxs[i].offsetTop);
		}

	}
</script>
<style scoped>
	

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
</style>