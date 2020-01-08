<!--
 * @Author: your name
 * @Date: 2020-01-03 17:33:31
 * @LastEditTime : 2020-01-03 18:12:09
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\chatList.vue
 -->
<template>
  <div id="chat">
    <div class="chat">
      <img src="avatar.jpg" alt />
      <ul class="chat-content">
        <li>
          找靓机客服
          <span id="guan">官方</span>
          <span class="time">2019-10-28</span>
        </li>
        <li>热门问题指引 下单包邮么？使用使用使用使用使用使用使用使用使用使用使用使用使用</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#chat {
  margin-top: 0.2rem;
  width: 90%;
  margin: 0 auto;
}
.chat {
  margin-top: 0.2rem;
}
.chat img {
  width: 0.7rem;
}
.chat-content{
    width: 75%; 
    display: inline-block;
    padding-left:.2rem;
    box-sizing: border-box;
    border-bottom: 3px solid #f7f7f7;
}
.chat-content :nth-child(1){
    white-space: nowrap;
    padding-bottom: 10px;
    font-size: .2rem;
}
.chat-content :nth-child(2){
    width: 100%; 
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 0 .15rem 0;
    color: #888b9a;
}
.time{
    margin-left: .2rem;
    color: #919191;
    font-size: 16px;
}
#guan{
    padding: 2px 3px;
    background-color: #f94336;
    border-radius: 3px;
    color: white;
    font-size: 16px;
}
</style>