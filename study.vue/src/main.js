import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
// import axios from 'axios';
import router from './router'
import service from './service' 
import echarts from 'echarts'

Vue.use(ElementUI);
Vue.config.productionTip = false;
//Vue.prototype.axios=axios;      //挂载到原型，可以全局使用，在组件中通过that.xxx使用
Vue.prototype.service=service
// Vue.prototype.$bus = new Vue();
Vue.prototype.$echarts = echarts

//路由导航守卫
router.beforeEach((to,from,next) => {
    if(!localStorage.getItem('username')){
      if(to.path !== '/login'){
        next('/login')
      }else next
    } next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


