<!--
 * @Author: your name
 * @Date: 2020-01-03 09:55:18
 * @LastEditTime : 2020-01-04 23:47:08
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\anchor.vue
 -->
<template>
  <div id="anchor">
    <div id="nav">
      <a v-for="(v,i) in sidebar" :key="i" :href="v.hrefurl" :class="v.classname">{{v.text}}</a>
    </div>
    <div id="main">
      <div v-for="(n,a) in pagelist" :key="a" class="mainPage" :id="n.pageid">
        <ul class="action-code">
          <li class="action">{{n.text1}}</li>
          <li class="omit">{{n.text2}}</li>
        </ul>
        <div class="goodslist">
          <div v-for="(v,i) in main" :key="i" class="detail">
            <img :src="v.imgurl" alt />
            <p>{{v.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  props:["main","pagelist","sidebar"],
  data() {
    return {
      
    };
  },
  method() {
    var nav = $("#nav");
    var mainPage = $(".mainPage");
    var mainTopArr = new Array();
    for (var i = 0; i < mainPage.length; i++) {
      var top = mainPage.eq(i).offset().top;
      mainTopArr.push(top);
    }
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      var k;
      for (var i = 0; i < mainTopArr.length; i++) {
        if (scrollTop >= mainTopArr[i]) {
          k = i;
        }
      }
      nav
        .find("a")
        .eq(k)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
    nav.find("a[href^='#']").click(function(e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 400);
    });
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  position: relative;
  height: 100%;
}

#nav {
  height: 100%;
  position: fixed;
  top: 27%;
  left: 0;
  margin-top: -140px;
  display: inline-block;
  vertical-align: middle;
}

#nav a {
  display: block;
  position: relative;
  width: 98px;
  height: 0.39rem;
  line-height: 0.39rem;
  text-align: center;
  background-color: #eee;
  color: #333;
  border-left: 2px solid transparent;
}
#nav a:hover {
  width: 98px;
  border-left: 2px solid #4b59ff;
}
#nav a p {
  position: relative;
  z-index: 3;
}
#nav a.active {
  background-color: #4b59ff;
  color: #fff;
}
#main {
  max-width: 70%;
  margin: .55rem 0 0 1rem;

}

/* #main div {
  height: 300px;
  background-color: #efefef;
  border-top: 1px solid #ccc;
}

#main div:nth-child(2n) {
  background-color: #fafafa;
} */
#main .mainPage {
  height: auto;
}

.action-code {
  display: flex;
  justify-content: space-between;
}
.action {
  font-size: 0.18rem;
}
.omit {
  padding-top: 5px;
  font-size: 0.14rem;
  color: #999999;
}
.goodslist {
  display: flex;
  flex-wrap: wrap;
}
.detail {
  width: 32%;
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
}
.detail img {
  width: 65%;
}
</style>