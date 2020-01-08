<!--
 * @Author: your name
 * @Date: 2019-12-28 17:40:09
 * @LastEditTime : 2020-01-03 19:26:15
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\pages\service.vue
 -->
<template>
    <div>
        <div class="title">
            <h2>客服</h2>
            <p>常见问题</p>
        </div>
        <serviceMore/>
        <chatList/>
        <kefuTime/>
        <Footer/>
        
    </div>
</template>
<script>
import Footer from '@/components/Footer'
import ServiceMore from '@/components/serviceMore'
import ChatList from '@/components/chatList'
import KefuTime from '@/components/kefuTime'
export default {
    components:{
        Footer,ServiceMore,ChatList,KefuTime
    }
}
</script>
<style scoped>
.title{
    padding: 10px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.title p{
    line-height: .32rem;
    font-size: .16rem;
}
.title h2{
    font-weight: 500;
}
</style>