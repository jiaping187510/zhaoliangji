<!--
 * @Author: your name
 * @Date: 2020-01-02 22:08:34
 * @LastEditTime : 2020-01-02 22:46:45
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\actionCell.vue
 -->
<template>
    <div id="action">
        <ul class="action">
            <li class="img2"><img src="sell1.jpg"></li>
            <li>
                <ul class="right">
                    <li class="img1"><img src="sell2.jpg" alt=""></li>
                    <li>
                        <ul class="right-child">
                            <li class="img" ><img src="sell3.jpg" alt=""></li>
                            <li class="img" ><img src="sell4.jpg" alt=""></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.action{
    width: 95%;
    display: flex;
    /* justify-content: space-between; */
    margin: 0 auto;
}

.img2 img{
    width: 90%;
}
.img1{
    margin-bottom:7px;
}
.img1 img{
    width: 1.66rem;
}
.right-child{
    display: flex;
    /* justify-content: space-between; */
}
.img img{
    width:90%;
}
</style>