<template>
  <div id="app" class="full">
    <router-view />
  </div>
</template>
<script>
import {getRouterMenu} from '@/router'
export default {
	name: 'App',
	created(){
		this.initMenuList();
	},
  methods: {
		initMenuList(){
			getRouterMenu().then(data => {
				if(data.menus.length>0){
					this.$store.commit('setMenulist', data.menus);
					this.$router.addRoutes(data.router)
				}else{
					this.$message({
						showClose: true,
						message: '菜单获取失败！',
						type: 'warning'
					});
					this.$router.push({path:'/'})
				}
			})
		},

  },
}

</script>
<style>
body{
  margin: 0;padding: 0;
}
.full{
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}

</style>
