<template>
  <div class="header">
    <el-header>
      <div class="title">通用后台管理系统</div>
      <div class="box">{{name}}</div>
    </el-header>
  </div>
</template>

<script>
import {getToken} from '../../utils/setToken'
export default{
  data(){
    return{
      name:''
    }
  },
  created(){
    this.name = getToken('username')
  }
}
</script>

<style lang="scss" scoped>
.header{
  width:100%;
  height:60px;
}
.el-header{
  width:100%;
  line-height:45px;
  background-color: rgb(37, 142, 227);
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.title{
  font-size:24px;
}
.box{
  height:45px;
  width:45px;
  border-radius:50%;
  background-color: #fff;
  color:black
}
</style>