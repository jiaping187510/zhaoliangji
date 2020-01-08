<!--
 * @Author: your name
 * @Date: 2019-12-28 16:24:49
 * @LastEditTime : 2020-01-02 18:11:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\search.vue
 -->
<template>
    <div id="search">
        <van-search :placeholder="text"/>
        <img :src="gou">
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
        
    },
    methods:{

    },
    props:["text","gou"],

}
</script>
<style scoped>

    .van-search__content{
        border-radius: 10px;
    }
    .van-search{
        width: 85%;
        background-color: aliceblue;
        border-radius: 50px;
        padding: 0;
        display: inline-block;
        vertical-align:middle;
        margin: 10px 0 0 10px;
    }
    img{
        width: .34rem;
        height: .34rem;
        margin: 10px 0 0 5px;
        vertical-align:middle;
    }
    #search{
        height: 1.2rem;
        border-radius:  0 0 10% 10%;
    }
    span{
        color: black;
        font-size: .2rem;
    }
</style>