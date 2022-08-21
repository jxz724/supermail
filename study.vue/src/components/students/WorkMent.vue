<template>
  <div class="work-ment">
    <!-- 表格 -->
    <el-table :data="comData" border style="width: 100%" >
      <el-table-column 
       prop="id" label="用户ID" width="180" align="center">
      </el-table-column>
      <el-table-column
       prop="userId" label="所属班级" width="180" align="center">
      </el-table-column>
      <el-table-column
        prop="title" label="作业名称" align="center">
      </el-table-column>
      <el-table-column
        prop="completed_text" label="完成情况" align="center">
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block">
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
  </div>
</template>

<script>
import { workInfo } from '../../api/api'
  export default {
    data() {
      return {
        tableData: [],
        currentPage:1,
        pageSize:10,
        total:0
      }
    },
    created(){
      this.getData()
    },
    computed:{
      comData(){
      //1:1-10条  2：11-20条  slice(0,10)  slice(10,20)
      //(currentPage - 1) * pageSize , currentPage * pageSize
      return this.tableData.slice((this.currentPage - 1) * this.pageSize,this.currentPage * this.pageSize)
      }
    },
    methods:{
      getData(){
        workInfo().then( res =>{
          console.log(res)
          if(res.data.status === 200){
            this.tableData = res.data.data
            this.total = this.tableData.length
            this.tableData.map(item => {
              item.completed ? item.completed_text = '是' : item.completed_text = '否'
            })
          }
        })
      },
      handleSizeChange(val) {
        this.pageSize = val
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>