<!--
 * @Author: your name
 * @Date: 2019-12-31 11:14:57
 * @LastEditTime : 2019-12-31 19:51:44
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\index-sort.vue
 -->
<template>
    <div>
        <ul class="indexsort">
            <li><img src="sj1.jpg"><p>手机</p></li>
            <li><img src="pb.jpg"><p>平板</p></li>
            <li><img src="sb.jpg"><p>手表</p></li>
            <li><img src="dn.jpg"><p>电脑</p></li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.indexsort{
    display: flex;
    justify-content: space-around;
    margin: 10px 0 0 0;
    text-align: center;
}
.indexsort img{
    height: .5rem;
    margin-bottom: 5px;
}
.indexsort li{
    width: 20%;
    background-color: #fff;
    padding :10px 0 10px 0;
    box-shadow: 0 0 10px #cccccc;
    border-radius: 8px;
}
</style>