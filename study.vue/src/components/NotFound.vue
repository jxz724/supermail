<template>
  <div class="notfound">
    <div class="font">
      <div class="big">页面不见了！</div>
      <div>首页瞧瞧，点击 <router-link to="/">这里</router-link>进入首页。</div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{}
    }
  }
</script>

<style>
.notfound{
  width:100%;
  height:100%;
  background-image:url('../assets/img/notfound.jpg');
  background-size:cover;
  background-repeat: no-repeat;
}
.font{
  position:fixed;
  bottom:120px;
  right:150px;
  color:azure;
  text-align: center;
}
.big{
  font-size:60px;
  margin-bottom:40px;
}
.router-link-active{
  color:orange;
  text-decoration:none;
}
</style>