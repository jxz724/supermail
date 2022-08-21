<template>
  <div class="home">
    <el-container>
      <head-bar>head</head-bar>
      <el-container  class="content">
        <side-menu>side</side-menu>
        <el-container>
          <el-main>
            <bread></bread>
            <div class="cont"><router-view></router-view></div>
          </el-main>
          <el-footer><foot-bar>foot</foot-bar></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import FootBar from './common/FootBar'
import HeadBar from './common/HeadBar.vue'
import SideMenu from './common/SideMenu.vue'
import Bread from './common/BreadCrumb.vue'

export default{
  components:{
    FootBar,
    HeadBar,
    SideMenu,
    Bread
  }
}
</script>

<style lang="scss">
.home{
  width:100%;
  height:100%;
}
.content{
  position:absolute;
  width:100%;
  top:60px;
  bottom: 0;
  text-align: center;
  .cont{
    margin:20px;
  }
}
</style>