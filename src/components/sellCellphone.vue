<!--
 * @Author: your name
 * @Date: 2020-01-02 19:32:35
 * @LastEditTime : 2020-01-02 22:07:16
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\sellCellphone.vue
 -->
<template>
  <div>
    <div class="sell">
      <div class="top">
        <ul class="top-child">
          <li v-for="(v,i) in arr" :key="i">
            <img :src="v.imgurl" />
            <span>{{v.text}}</span>
          </li>
          <!-- <li><img src="zuanshi.jpg"><span>行业高价</span></li> -->
        </ul>
      </div>
      <div class="center">
        <ul class="center-child">
          <li>
            <img src="myphone.jpg" />
          </li>
          <li class="code-first">
            <p>最高回收价:</p>
            <p>
              ￥
              <span>1882</span>
            </p>
            <p>
              <span>本机</span>红米&nbsp;K20&nbsp;Pro
            </p>
          </li>
          <li class="code-second">提交换钱</li>
        </ul>
      </div>
      <div class="bottom">
        <ul class="bottom-child">
          <li class="first">限时加载</li>
          <li>全场加价20%&nbsp;</li>
          <li>
            距离失效
            <img src="time.jpg" alt />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        { imgurl: "zuanshi.jpg", text: "行业高价" },
        { imgurl: "dunpai.jpg", text: "隐私保护" },
        { imgurl: "money.jpg", text: "极速收钱" }
      ]
    };
  }
};
</script>
<style scoped>
.sell {
  width: 90%;
  background-color: #fff;
  box-shadow: 0 0 5px #cccccc;
  border-radius: 0.1rem;
  padding: 0 0 10px 0;
}
.top {
  height: 0.32rem;
  border-bottom: 1px solid #b2b2b2;
}
.top .top-child {
  display: flex;
  justify-content: space-around;
  padding: 6px 0 0 0;
  /* align-items: center; */
}
.top-child :nth-child(2) img {
  width: 0.2rem;
}
.top-child :nth-child(3) img {
  width: 0.2rem;
}
.top img {
  width: 0.25rem;
  vertical-align: middle;
  margin: 0 6px 0 0;
}
.top span {
  height: 0.22rem;
  display: inline-block;
  vertical-align: middle;
  color: #b2b2b2;
}

.center img {
  width: 0.5rem;
}
.center {
  padding: 15px 0 0.1rem 0;
}
.center-child {
  display: flex;
  justify-content: space-around;
}
.code-first {
  padding-top: 0.12rem;
  /* width: 1.8rem; */
}
.code-first :nth-child(2) {
  color: #ff2600;
  display: inline-block;
}
.code-first :nth-child(1) {
  display: inline-block;
}
.code-first :nth-child(3) span {
  background-color: #666666;
  border-radius: 5px;
  padding: 4px 10px;
  color: white;
  margin-right: 5px;
  font-size: 16px;
}
.code-first :nth-child(3) {
  font-size: 0.18rem;
}
.code-first :nth-child(2) span {
  display: inline-block;
  font-size: 0.3rem;
  margin-top: -15px;
}

.code-second {
  width: 0.8rem;
  height: 0.35rem;
  background-color: #fe3904;
  border-radius: 0.5rem;
  text-align: center;
  line-height: 0.35rem;
  margin-top: 0.2rem;
  color: white;
}

.bottom-child {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
}
.bottom {
  padding: 0.1rem 0 0 0;
  border-top: 1px solid #eeeeee;
}
.first {
  width: 0.8rem;
  height: 0.25rem;
  border: 2px solid #fee9e8;
  box-sizing: border-box;
  text-align: center;
  color: #ff2624;
  border-radius: 5px;
}
.bottom-child :nth-child(3) img {
  width: 0.7rem;
  vertical-align: center;
}
.bottom-child :nth-child(3) {
}
</style>