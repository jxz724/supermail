<template>
  <div class="worklist">
    <el-table :data="compData" border style="width: 100%" v-loading="loading">
      <el-table-column prop="id" label="用户ID"  align="center"></el-table-column>
      <el-table-column prop="userId" label="所属班级"  align="center"></el-table-column>
      <el-table-column prop="title" label="作业名称"  align="center"></el-table-column>
      <el-table-column prop="completed_text" label="完成情况"  align="center"></el-table-column>
    </el-table>
      <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 30,50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import { getTableData } from '../../utils/table'
export default{
  data(){
    return{
      tableData:[],
      currentPage:1,
      total:0,
      pageSize:10,
      loading:true
    }
  },
  created(){
    getTableData(this,'/works',{},['completed'])
  },
  computed:{
    compData(){
      return this.tableData.slice((this.currentPage-1) * this.pageSize,this.pageSize * this.currentPage)
      }
  },
  methods:{
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
  }
}
</script>