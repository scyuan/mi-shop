import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const shopcart = {
	state:{
		list:[]
	},
	mutations:{
		/*
			item:{
				id:'',
				name:'',
				href:'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e98be403a5f4277adba84acaecb9c76.jpg?bg=6D96C7',
				price:'',
				count:'',
			}
		*/
		addOne(state,item){
			let exist = false;
			let index = state.list.length;
			for(let i=0;i<state.list.length;i++){
				if(state.list[i].id === item.id){
					exist = true;
					index = i;
					break;
				}
			}
			if(exist){
				// 存在
				state.list[index].count++;
			}else{
				state.list.push(item);
			}
		},
		reduceOne(state, item){
			let index = state.list.length;
			for(let i=0;i<state.list.length;i++){
				if(state.list[i].id === item.id){
					index = i;
					break;
				}
			}
			
			state.list[index].count --;
		},
		deleteOne(state,item){
			let index = state.list.length;
			for(let i=0;i<state.list.length;i++){
				if(state.list[i].id === item.id){
					index = i;
					break;
				}
			}
			state.list.splice(index,1);
		}
	}
}

export default new Vuex.Store({
	modules:{
		shopcart
	}
})