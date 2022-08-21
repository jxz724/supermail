import Vue from 'vue'
import Router from 'vue-router'
// import HomePage from '../components/HomePage'

Vue.use(Router)

export default new Router({
  routes:[{
    path:'*',
    hidden:true,
    name:'NotFound',
    component:() => import('../components/NotFound.vue')
  },{
    path:'/',
    redirect:'/login',
    name:'Login',
    hidden:true,
    component:() => import('../components/LoginPage.vue')
  },{
    path:'/login',
    hidden:true,
    name:'首页',
    component:() => import('../components/LoginPage.vue')
  },{
    path:'/home',
    name:'学生管理',
    iconClass:'fa fa-users',
    redirect:'/home/student',
    component:() => import('../components/HomePage.vue'),
    children:[{
      path:'/home/student',
      name:'学生列表',
      iconClass:'fa fa-list',
      component:() => import('../components/students/StudentList.vue')
    },{
      path:'/home/info',
      name:'信息列表',
      iconClass:'fa fa-list-alt',
      component:() => import('../components/students/InfoList.vue')
    },{
      path:'/home/infos',
      name:'信息管理',
      iconClass:'fa fa-list-alt',
      component:() => import('../components/students/InfoLists.vue')
    },{
      path:'/home/work',
      name:'作业列表',
      iconClass:'fa fa-list-ul',
      component:() => import('../components/students/WorkList.vue')
    },{
      path:'/home/works',
      name:'作业管理',
      iconClass:'fa fa-th-list',
      component:() => import('../components/students/WorkMent.vue')
    }]
  },{
    path:'/home',
    name:'数据分析',
    iconClass:'fa fa-bar-chart',
    component:() => import('../components/HomePage.vue'),
    children:[{
      path:'/home/dataview',
      name:'数据概览',
      iconClass:'fa fa-line-chart',
      component:() => import('../components/dataAnalys/DataView.vue')
    },{
      path:'/home/mapview',
      name:'地图概览',
      iconClass:'fa fa-line-chart',
      component:() => import('../components/dataAnalys/MapView.vue')
    },{
      path:'/home/travel',
      name:'旅游地图',
      iconClass:'fa fa-line-chart',
      component:() => import('../components/dataAnalys/TravelMap.vue')
    },{
      path:'/home/score',
      name:'分数地图',
      iconClass:'fa fa-line-chart',
      component:() => import('../components/dataAnalys/ScoreMap.vue')
    }]
  },{
    path:'/users',
    name:'用户中心',
    iconClass:'fa fa-user',
    component:() => import('../components/HomePage.vue'),
    children:[{
      path:'/users/user',
      name:'权限管理',
      iconClass:'fa fa-user',
      component:() => import('../components/users/UserAbout.vue')
    }],
  }],
  mode:'history'
})