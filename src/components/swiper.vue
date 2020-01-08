<!--
 * @Author: your name
 * @Date: 2019-12-30 09:49:40
 * @LastEditTime : 2020-01-04 23:58:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\swiper.vue
 -->
<template>
  <div class="swper">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(v,i) in imgurl" :key="i"><img :src="v.imgurl"></van-swipe-item>
    </van-swipe>
    
  </div>
</template>
<script>
export default {
  props:["imgurl"],
    data() {
      return {
        
      }
    },
    
};
</script>
<style scoped>
    .van-swipe{
        text-align: center;
        width: 100%;
        height: 1rem;
    }
    img{
        width: 3.5rem;
        height: 1rem;
    }
</style>