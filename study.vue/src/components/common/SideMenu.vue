<template>
  <div class="aside">
    <el-aside width="200px">
      <el-menu
        router
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="rgb(37, 142, 227)"
        text-color="#fff"
        active-text-color="#ffd04b">
        <div  v-for="(item,index) in menus" :key="index">
          <el-submenu :index="index + ' '" v-if="!item.hidden">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group v-for="(child,index) in item.children" :key="index">
              <el-menu-item :index="child.path">
                <i :class="child.iconClass"></i>
                {{ child.name }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </div>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default{
  data(){
    return{
      menus:[]
    };
  },
  created(){
    this.menus = [...this.$router.options.routes]
    console.log(this.$router.options.routes)
  }
}
</script>

<style lang="scss" scoped>
.aside{
  .el-aside{
    height:100%;
    .el-menu{
      height:100%;
        .fa{
        margin-right:10px;
      }
      .el-submenu__title{
        padding:0 !important;
      }
    }
  }
}
</style>