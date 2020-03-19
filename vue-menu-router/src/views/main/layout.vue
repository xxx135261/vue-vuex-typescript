<template>
  <div class="app_wapper">
    <el-container>
      <!-- 左侧菜单 -->
      <el-aside class="slider_container">
        <el-menu class="sub_meuns_wapper" mode="vertical" unique-opened :default-active="$route.path" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
          <!-- 菜单组件 -->
          <side-menu :menuList="menulist"></side-menu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容区域 -->
      <el-container class="app_content">
        <el-header style="text-align: right; font-size: 12px">
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-button @click="outSystem" size="mini" plain type="primary">退出</el-button>
        </el-header>
        <!-- 内容区域 -->
        <el-main>
          <!-- 二级路由跳转 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// 左侧菜单组件
import sideMenu from '@/components/menu/sideMenu'
import {mapGetters} from 'vuex'
export default {
  computed: {
		...mapGetters(['menulist'])
	},
  components: {
    sideMenu
  },
  data() {
    return {
			userRole: 'Topest',
    }
	},
  methods: {
    outSystem() { //退出系统
      localStorage.setItem("userRole", 'unload')
      // 跳转到登录页的时候顺便刷新
      window.location.href = window.location.origin + window.location.pathname
    },
  },
  mounted() {
    
  }
}

</script>
<style lang="scss" scoped>
/*wapper*/
.app_wapper {
  position: relative;
  height: 100%;
	width: 100%;
	.el-container{
		height: 100%;
	}
	
	.app_content {
		min-height: 500px;
		margin-left: 184px;
		border: 1px solid #eee;
		box-sizing: border-box;
	}

	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
}

.app_wapper .el-aside,
.slider_container .el-menu {
  color: #333;
  transition: width .28s;
  width: 184px !important;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
}

</style>
