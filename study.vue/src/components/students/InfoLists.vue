<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名"  align="center"></el-table-column>
      <el-table-column prop="sex_text" label="性别"  align="center"></el-table-column>
      <el-table-column prop="age" label="年龄"  align="center"></el-table-column>
      <el-table-column prop="number" label="学号"  align="center"></el-table-column>
      <el-table-column prop="class" label="班级"  align="center"></el-table-column>
      <el-table-column prop="state_text" label="状态"  align="center"></el-table-column>
      <el-table-column prop="address" label="地址"  align="center"></el-table-column>
      <el-table-column prop="phone" label="联系方式" align="center"> </el-table-column>
      <el-table-column label="操作" align="center">
        <!-- 删除按钮 -->
        <!-- <template slot-scope="scope">
          <el-button type="danger" size="mini" icon="el-icon-delete"
                     @click="del(scope.row)">
          </el-button>
        </template> -->
      </el-table-column>
    </el-table>
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
  export default{
    data(){
      return {
      tableData:[]
    }
    }
  }
</script>
