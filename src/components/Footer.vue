<!--
 * @Author: your name
 * @Date: 2019-12-28 17:32:53
 * @LastEditTime : 2020-01-02 14:08:45
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\bottombar.vue
 -->
<template>
    <div class="footer">
        <router-link to="/index">
            <img src="index.png">
            <span>首页</span>
        </router-link>

        <router-link to="/sort">
            <img src="sort-w.png">
            <span>分类</span>
        </router-link>

        <router-link to="/cellphone">
            <img src="sell.png">
            <span>卖手机</span>
        </router-link>

        <router-link to="/service">
            <img src="service-w.png">
            <span>客服</span>
        </router-link>

        <router-link to="/personal">
            <img src="personal-w.png">
            <span>个人</span>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .footer{
        position: fixed;
        bottom:0;
        width: 100%;
        height: .66rem;
        border-top: 1px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top: 1px solid #e9e9e7;
        background-color: #fff;
    }
    .footer img{
        display: block;
        width:.29rem;
        height: .29rem;
        margin: 0 auto 5px auto;
    }
    .footer span{
        display: block;
        font-size: 14px;
    }
</style>