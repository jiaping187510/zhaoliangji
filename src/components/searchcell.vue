<!--
 * @Author: your name
 * @Date: 2019-12-28 16:24:49
 * @LastEditTime : 2020-01-02 19:28:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\search.vue
 -->
<template>
  <div id="search">
    <van-search :placeholder="text" />
    <span>{{msg}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "回收加价券"
    };
  },
  methods: {},
  props: ["text"]
};
</script>
<style scoped>
.van-search__content{
        border-radius: 10px;
    }
.van-search {
  float: left;
  width: 70%;
}
span {
  height: 0.34rem;
  color: black;
  font-size: 0.18rem;
  float: right;
  padding: 10px 0;
  line-height: 0.34rem;
}
</style>