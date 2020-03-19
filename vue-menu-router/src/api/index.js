import fetch from "@/axios";
import {menuTreeData} from '@/mock';
// 菜单
export function reqMenuList2(query) {
  return fetch({
    url: '/hcm/getMenuListByUser',
		method: 'get',
		params:query
	})
}

// 模拟请求
export function reqMenuList(){
	let menudata = menuTreeData;
	return new Promise((r)=>{
		r({
			data:menudata,
			status:'10000'
		})
	})
}
