<!--
 * @Author: your name
 * @Date: 2020-01-02 22:49:54
 * @LastEditTime : 2020-01-02 23:31:36
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\process.vue
 -->
<template>
    <div id="process">
        <ul class="process">
            <li class="process-child"><span class="recycle">回收流程</span><span class="question">常见问题&nbsp;></span></li>
            <div class="process-child1">
                <li class="process-child2">
                    <img class="img" src="phone-money.jpg">
                    <img class="arrow" src="right-arrow.jpg">
                    <img class="img" src="fangdajing.jpg">
                    <img class="arrow" src="right-arrow.jpg">
                    <img class="img" src="car.jpg">
                    <img class="arrow" src="right-arrow.jpg">
                    <img class="img" src="shoukuan.jpg">
                    
                </li>
                <div class="process-child3">
                    <p>1.在线估价</p>
                    <p>2.顺丰包邮</p>
                    <p>3.专业质检</p>
                    <p>4.极速收款</p>
                </div>
            </div>
            
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.process{
    width: 92%;
    margin: 10px auto 0 auto;
}
.process-child{
    display: flex;
    justify-content: space-between;
}
.recycle{
    font-size: .18rem;
}
.question{
    color:#999999;
}
.process-child2{
    width: 100%;
    height: .7rem;
    margin: 10px auto 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* padding: .2rem 0 0 0; */
    box-sizing: border-box;
}
.img{
    width: .3rem;
    height: .3rem;
}
.arrow{
    padding-top: 8px;
    width: .1rem;
    height: .2rem;

}
.process-child1{
    background-color: #f8f8f8;
}
.process-child3 {
    display: flex;
    justify-content: space-around;
    padding: 0 0 10px 0;
}
</style>