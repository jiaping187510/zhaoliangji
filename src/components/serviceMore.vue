<!--
 * @Author: your name
 * @Date: 2020-01-03 17:06:35
 * @LastEditTime : 2020-01-03 17:31:59
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\serviceMore.vue
 -->
<template>
    <div id="more">
        <ul class="more">
            <li class="truck"><img src="truck.jpg"><p>物流查询</p></li>
            <li><img src="chaxun.jpg"><p>售后查询</p></li>
            <li><img src="tousu.jpg"><p>投诉中心</p></li>
            <li><img src="fuwu.jpg"><p>更多服务</p></li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
#more{
    margin-top: .2rem;
}
.more{
    box-shadow: 0 0 10px #d8d8d8;
    width: 3.31rem;
    height: .8rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding-top: .2rem;
    border-radius: 10px;
}
.more img{
    width: .41rem;
}
.more p{
    text-align: center
}
.truck p{
    padding-top: 8px;
}
</style>