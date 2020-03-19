// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import '@/utils/global'//全局
Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
	router,
	store,
  render: h => h(App)
}).$mount("#app")

//路由拦截
router.beforeEach((to, from, next) => {
  const userData=localStorage.getItem('userRole')
	if(to.matched.length === 0)  next({ path: '/'})
  if(to.path.indexOf('login')==-1){
    //未登录不是修改密码
    if(!userData){
      // console.log('没有登录信息')
      next({ path: '/'})
    }else{
      //已经登录
      next();
    }
  }else{
    next();
  }
});
