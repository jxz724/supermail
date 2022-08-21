<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系统</span>
      </div>
        <el-form label-width="80px" :model="form" :rules="rules" ref="form">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">登录</el-button>
          </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>

<script>
import {setToken} from '../utils/setToken.js'
import {login} from '../api/api.js'
export default{
  data(){
    return{
      form:{
        username:'',
        password:''
      },
      rules:{
        username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            {min:4,max:10,message:'长度在4-10位之间',trigger:'blur'}
            //trigger: ‘change’:数据改变时触发;trigger: ‘blur’:失去焦点时触发
            // required: true:必填，若为空，提示信息为message
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            {min:6,max:12,message:'长度在6-12位之间',trigger:'blur'}
          ],
      }
    }
  },
  methods:{
    submitForm(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            console.log(this.form);
            login(this.form).then(res =>{
              if (res.data.status ===200){
                setToken('username',res.data.username)
                setToken('token',res.data.token)
                this.$message({message:res.data.message,type:'success'})
                this.$router.push('/home');

              }
              })
              .catch((err) =>{
                console.log(err);
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
  }
}
</script>

<style lang="scss">
.login{
  width:100%;
  height:100%;
  position:absolute;
  .box-card{
    width:450px;
    margin:200px auto;
    text-align: center;
    .el-button{
      width:100%;
    }
  }
}
</style>