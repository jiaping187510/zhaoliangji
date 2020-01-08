<!--
 * @Author: your name
 * @Date: 2019-12-31 10:17:46
 * @LastEditTime : 2019-12-31 16:22:19
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\filter.vue
 -->
<template>
    <div>
        <ul class="myfilter">
            <li><span>综合排序</span> <img src="downarrow.png"> </li>
            <li><span>价格</span><img src="downarrow-w.png"></li>
            <li><span>机型</span><img src="phone.png"></li>
            <li><span>筛选</span><img src="filter.png"></li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
.myfilter{
    padding-top: 5px;
    margin: 0 auto;
    width: 100%;
    height: .4rem;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
}
.myfilter span{
    font-size: 16px;
    display: inline-block;
}
.myfilter img{
    vertical-align: middle;
}
</style>