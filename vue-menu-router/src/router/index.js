import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import {reqMenuList} from '@/api/index'

let routes = [
	{	path: '/',
		redirect: `/login`,
	},{
	path: '/login',
	name: 'login',
	component: () => import ('@/views/login/login.vue'),
},{
	path: '/layout',
	name: 'layout',
	component:() => import('@/views/main/layout.vue'),
	children:[]
},]

// 菜单请求
function getMenulist(){
	return new Promise((r)=>{
		reqMenuList().then(res => {
			if(res.status == '10000'){
				r(res.data)
			}else{
				r([])
			}
		}).catch(() => {
			r([])
		})
	})
	
}

let result = [];
function createrRouter(menus, result) {
  for (let i = 0; i < menus.length; i++) {
    if (!menus[i].children || menus[i].children.length==0){
			let r = {
				path: menus[i].routePath,
				name:'menu'+ menus[i].id,
				component:() => import('@/views/'+menus[i].modulename+'/'+menus[i].menuUrl+'.vue'),
			}
			result.push(r)
		} 
    else if (menus[i].children && menus[i].children.length>0)
		createrRouter(menus[i].children, result);
  }
}

//静态路由 以为.static.vue结尾 
let file = require.context('@/views', true, /\.static.vue$/)
file.keys().forEach(item=>{
		let path=item.substring(item.lastIndexOf('/'),item.length-11)
    routes[2].children.push(
        {
            path,
            name: path.substring(1,path.length),
            component: () => import('@/views/'+item.slice(2,item.length)),
        }
    )
})

// 生成动态路由（main路由的子路由）
export const getRouterMenu = async() =>{
	let menulist = await getMenulist();
	return new Promise((r => {
		createrRouter(menulist,result)
		routes[2].children = routes[2].children.concat(result);
		let resuleMenu = {
			router:routes,
			menus:menulist
		}
		r(resuleMenu)
	}))
}

const router = new Router({
  routes:routes
})
export default router