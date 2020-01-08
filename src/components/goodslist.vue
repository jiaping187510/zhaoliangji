<!--
 * @Author: your name
 * @Date: 2019-12-31 17:05:02
 * @LastEditTime : 2020-01-04 20:29:28
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\goodslist.vue
 -->
<template>
  <div class="main">
    <div class="biggoodslist" v-for="(v,i) in goodsarr" :key="i">
      <ul class="goodslist">
        <li class="goods-photo">
          <img :src="v.imgurl1" />
        </li>
        <li class="goods-code">
          <p>{{v.description}}</p>
          <ul class="label">
            <li>
              {{v.time}}
              <p>出厂</p>
            </li>
            <li>
              {{v.system}}
              <p>系统</p>
            </li>
            <li>
              {{v.charge}}
              <p>充电</p>
            </li>
          </ul>
        </li>
      </ul>
      <div class="price">
        <ul>
          <li>
            ￥
            <span>{{v.money}}</span>
          </li>
          <li>{{v.newphone}}</li>
          <li>{{v.save}}</li>
          <li>
            <img :src="v.imgurl2" />
          </li>
        </ul>
        <div class="similar">
          <p>{{v.similar}}</p>
          <p>{{v.interest}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:["goodsarr"],
  data() {
    return {
      // goodslist: [
      //   {
      //     imgurl1: "iphone7.jpg",
      //     description: "8新 iPhone7 32G玫瑰金 移动4G，联通4G，电信4G 其他版本",
      //     time: "2017年09月",
      //     system: "IOS 13.3",
      //     charge: "0次",
      //     money: "1099",
      //     newphone: "新机:￥3599",
      //     save: "省￥2500",
      //     imgurl2: "bi.jpg",
      //     similar: "同类最低价",
      //     interest: "3期免息"
      //   },
      //   {
      //     imgurl1: "iphone7.jpg",
      //     description: "8新 iPhone7 32G玫瑰金 移动4G，联通4G，电信4G 其他版本",
      //     time: "2017年09月",
      //     system: "IOS 13.3",
      //     charge: "0次",
      //     money: "1099",
      //     newphone: "新机:￥3599",
      //     save: "省￥2500",
      //     imgurl2: "bi.jpg",
      //     similar: "同类最低价",
      //     interest: "3期免息"
      //   }
      // ]
    };
  }
};
</script>
<style scoped>
.main {
  margin: 0.2rem 0 0.66rem 0;
}
.biggoodslist {
  width: 100%;
  margin: 0rem 0 0rem 0;
  background-color: #fff;
  padding: 15px 0 0 0;
}
.goodslist {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.goods-photo img {
  width: 0.7rem;
  margin-right: 0.2rem;
}
.label {
  margin-top: 0.15rem;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  text-align: center;
}
.label p {
  color: #999999;
}
.label li {
  width: 0.7rem;
  margin: 0 5px;
  background-color: #f7f7f7;
  border-radius: 5px;
}
.price {
  overflow: hidden;
  padding: 0 0 10px 1rem;
  font-size: 14px;
  border-bottom: 1px solid #eeeeee;
}
.price {
  margin-top: 10px;
}
.price ul{
  clear: both;
}
.price ul li {
  float: left;
}
.price ul :nth-child(1) span {
  font-size: 0.22rem;
  display: inline-block;
  margin-top: -5px;
}
.price ul :nth-child(1) {
  color: #ff1b1a;
  padding-right: 3px;
}
.price ul :nth-child(2) {
  color: #b2b2b2;
  padding-right: 3px;
  text-decoration: line-through;
}
.price ul :nth-child(3) {
  color: white;
  padding-right: 3px;
  background-color: #fe9345;
  border-radius: 3px;
  padding: 0 5px;
}
.price ul :nth-child(4) img {
  margin-left: 16px;
  width: 0.2rem;
}
.price div p {
  display: inline-block;
  padding: 0 10px;
  color: #ff4c31;
  border: 1px solid #ff4c31;
  border-radius: 3px;
  margin: 0 3px;
}
.similar{
  clear: both;
}

</style>