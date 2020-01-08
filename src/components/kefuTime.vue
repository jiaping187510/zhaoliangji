<!--
 * @Author: your name
 * @Date: 2020-01-03 19:18:43
 * @LastEditTime : 2020-01-03 19:43:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\kefuTime.vue
 -->
<template>
    <div id="kefu">
        <div class="kefu">
            <ul class="content">
                <li><img src="kf.jpg" alt=""></li>
                <li><p class="first">在线客服</p><p>8:30-24:00</p></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.kefu{
    width: 1.4rem;
    height: .45rem;
    position: fixed;
    bottom: .9rem;
    left: 1.2rem;
}
.content{
    /* display: flex;
    justify-content: space-around; */
    box-shadow: 0 0 5px #c9c7c7;
    border-radius: 50px;
}
.content li{
    display: inline-block;
    vertical-align: middle;

}
.content img{
    width: .3rem;
    padding: 2px .14rem 0 .12rem;
}
.content :nth-child(2){
    color: #1890ff;
    font-size: 14px;
}
.first{
    font-size: 16px;
}
</style>