<template>
  <div class="menu-wrap">
    <template v-if="!item.children || item.children.length == 0">
			<el-menu-item :index="'menu'+item.id" :route="item.routePath" @click="menuClick(item)">
				<img :src="itemImg(item)" class="picon_icon" />
				{{item.menuName}}
			</el-menu-item>
    </template>

    <el-submenu v-else :index="'menu'+item.id">
      <template slot="title" >
        <img :src="itemImg(item)" class="picon_icon" />
        {{item.menuName}}
      </template>

      <template v-for="child in item.children">
        <sidebar-item
          v-if="child.children&&child.children.length>0"
          :item="child"
          :key="'menu'+child.id"/>
        <el-menu-item v-else :key="'menu'+child.id" :route="child.routePath" :index="'menu'+child.id">
          <span  @click="menuClick(child)" class="menu-child">
						<img :src="require('@/assets/menu-icon/position.png')" class="menu-child-img" />
						{{child.menuName}}
					</span>
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script> 
export default {
  name: 'sidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
	},
	methods:{
		itemImg(item) {
      let img = "";
      try {
        img = require("@/assets/menu-icon/" +
          item.menuIcon +
          ".png");
      } catch (err) {
        img = "";
      }
      return img;
    },
		menuClick(item){
			this.$router.push({path:item.routePath})
		}
	}
}
</script>
<style lang="scss">
$lightColor: #cfa972;
.el-menu{
	background-color: #19233c!important;
	&-item{
		background-color: #19233c!important;
	}
}
.el-submenu {
	&__title{
		background-color: #19233c!important;
	}
	&__icon-arrow{
		right: 10px !important;
    font-size: 14px;
    font-weight: 600;
	}
	.el-menu-item{
		position: relative;
		background-color: #151e33!important;
		&:hover{
			color: $lightColor!important;
			.menu-child{
				&-img{
					display: block;
				}
				&::before{
					display: none;
				}
			}
		}
		&.is-active{
			color: $lightColor!important;
			.menu-child{
				&-img{
					display: block;
				}
				&::before{
					display: none;
				}
				&::after{
					background: $lightColor;
				}
			}
		}
	}
}
.menu-child {
     position: relative;
      &::before {
        content: "";
				position: absolute;
				top: 7px;
				left: -14px;
				width: 7px;
				height: 7px;
				background: #ddd;
				border-radius: 7px;
      }
      &::after {
				content: "";
				position: absolute;
				top: -28px;
				left: -11px;
				width: 1px;
				height: 38px;
				background: #dddddd9c;
      }
			&-img{
				display: none;
				position: absolute;
				top: 8px;
				left: -15px;

			}
  }
</style>