<!--
 * @Author: your name
 * @Date: 2019-12-25 14:45:53
 * @LastEditTime : 2020-01-02 14:03:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\App.vue
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    height: 100%;
  }
  html{
    font-size: 26.67vw;
  }
  body{
    font-size: 16px;
  }
  a{
    color: black;
  }
  ul,li{
    list-style: none;
  }
</style>
