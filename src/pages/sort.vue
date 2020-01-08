<!--
 * @Author: your name
 * @Date: 2019-12-28 17:37:44
 * @LastEditTime : 2020-01-04 23:41:55
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\pages\sort.vue
 -->
<template>
  <div class="sort">
    <search :text="text" :gou="imgurl" />
    <anchor :main="main" :pagelist="pagelist" :sidebar="sidebar"/>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import Search from "@/components/search";
import Anchor from "@/components/anchor";
export default {
  created() {
    this.axios({
      url: "/api/pagelist",
      method: "get"
    }).then(ok => {
      window.console.log(ok.data.pagelist);
      this.pagelist = ok.data.pagelist;
    });
    this.axios({
      url: "/api/sidebar",
      method: "get"
    }).then(ok => {
      window.console.log(ok.data.sidebar);
      this.sidebar = ok.data.sidebar;
    });
    this.axios({
      url: "/api/main",
      method: "get"
    }).then(ok => {
      window.console.log(ok.data.main);
      this.main = ok.data.main;
    });
  },
  data() {
    return {
      text: "三星旗舰  好货集结",
      imgurl: "gou.png",
      main: [],
      pagelist: [],
      sidebar: []
    };
  },
  components: {
    Footer,
    Search,
    Anchor
  }
};
</script>

<style scoped>
.sort {
  margin: 0 0 0.66rem 0;
}
.sort >>> #search {
  width: 100%;
  height: auto;
  background-color: #fff;
  position: fixed;
  top: 0;
  padding-bottom: 10px;
}
</style>