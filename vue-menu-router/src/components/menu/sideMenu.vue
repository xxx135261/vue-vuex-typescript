<template>
  <div class="sidebar-container">
		<!-- logo -->
		<router-link to="/main" class="logo">
			<img :src="require('@/assets/logo-img/logo.png')">
		</router-link>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
				:unique-opened='true'
        mode="vertical"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF">
      <sidebar-item v-for="menu in menuList" :key="'menu'+menu.id" :item="menu" />
    </el-menu>
  </el-scrollbar>
  </div>
</template>
<script>
import sidebarItem from './sidebarItem'
export default {
  name:'Sidebar',
  components: { sidebarItem },
  props:{
    menuList: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss">
  .sidebar-container {
    transition: width 0.28s;
    width: 184px !important;
    height: 100%;
    position: fixed;
    font-size: 0px;
    bottom: 0;
    left: 0;
    z-index: 1001;
		overflow: hidden;
		.logo{
			display: block;
			height: 60px;
			background: #000;
			img{
				display: block;
				margin: 6px auto;
			}
		}
  }
	.horizontal-collapse-transition {
      transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    }
    .el-scrollbar {
      height: 100%;
    }
    .scrollbar-wrapper {
      overflow-x: hidden!important;
      .el-scrollbar__view {
        height: 100%;
      }
    }
    .el-scrollbar__bar.is-vertical{
      right: 0px;
    }
    .is-horizontal {
      display: none;
    }
    a {
      display: inline-block;
      width: 100%;
      overflow: hidden;
    }
    .el-menu {
      border: none;
      height: 100%;
      width: 100% !important;
    }
    .is-active > .el-submenu__title{
        color: #f4f4f5!important;
    }
</style>