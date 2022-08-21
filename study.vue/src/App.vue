<template>
  <div id="app">
    <!-- <home-page></home-page> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    // HomePage
  }
}
</script>

<style lang="scss">
@import url('./assets/css/reset.css');
html,body{
  width:100%;
  height:100%;
}
#app{
  width:100%;
  height:100%;
}
</style>
