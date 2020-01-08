<!--
 * @Author: your name
 * @Date: 2019-12-30 20:30:32
 * @LastEditTime : 2020-01-04 22:43:41
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\action.vue
 -->
<template>
    <div class="action">
        <ul>
            <li v-for="(v,i) in list" :key="i"><img :src="v.imgurl"><p>{{v.imgtext}}</p></li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[
                {imgurl:"iphone.jpg",imgtext:"iphone"},
                {imgurl:"huawei.jpg",imgtext:"华为"},
                {imgurl:"xiaomi.jpg",imgtext:"小米"},
                {imgurl:"oppo.jpg",imgtext:"oppo"},
                {imgurl:"vivo.jpg",imgtext:"vivo"},
                {imgurl:"peijian.jpg",imgtext:"二手集市"},
                {imgurl:"pingban.jpg",imgtext:"平板"},
                {imgurl:"shoubiao.jpg",imgtext:"手表"},
                {imgurl:"bijiben.jpg",imgtext:"笔记本"},
                {imgurl:"anzhuo.jpg",imgtext:"其他安卓"}
            ]
        }
    },
}
</script>
<style scoped>
    ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    ul li{
        width: 20%;
        text-align: center;
    }
    ul img{
        width: .5rem;
    }
    ul p{
        font-size: 14px;
        color: #909090;
    }
</style>