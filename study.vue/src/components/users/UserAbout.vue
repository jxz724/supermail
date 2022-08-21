<template>
  <div>
    <el-tree
      :data="data"
      show-checkbox
      node-key="name"
      :props="defaultProps">
    </el-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: 'name',
          children: [{
            id: 2,
            label: '二级 1-1',
          }]
      }],
        defaultProps: {
          children: 'children',
          label: 'name'   //定义label取哪个字段的数据
        }
      };
    },
    created(){
      // console.log(this.$router.options.routes)
      this.data = [...this.$router.options.routes]
    }
  };
</script>