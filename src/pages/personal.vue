<template>
    <div>
        <!-- 头部 -->
        <div class="header">
            <div class="conter">
                <div class="left">
                    <img src="boy.png" class="boy">
                    <router-link to="/denglu">
                        <span>登录/</span>
                    </router-link>
                    <router-link  to="/zhuce">
                         <span>注册</span>  
                    </router-link>
                    
                </div>
                <img src="dbx.png">
            </div>
        </div>
        <!-- 我买卖情况 -->
          <Deal/>
        <!-- 类别 -->
        <Classb/>
        <!-- 大图 -->
        <div class="qzj">
            <img src="qzj.png" >
        </div>
        <!-- 信息 -->
        <div class="message">
             <p><span>40G流量免费领</span><span>></span></p>
             <p><span>我的返现</span><span>余额0.00></span></p> 
             <p><span>电子保修卡</span><span>></span></p>
             <p><span>直播</span><span>></span></p>
             <p><span>问答社区</span><span>></span></p>   
             <p><span>测评视频</span><span>></span></p> 
             <p><span>电话客服<span id="time">(08:30-20:00)</span></span><span>></span></p> 
             <p><span>邀请好友</span><span>></span></p> 
        </div>
        
        <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer'
import Deal from '@/components/deal.vue'
import Classb from '@/components/classb.vue'
export default {
    data() {
        return {
           
        }
    },
    components:{
        Footer,
        Deal,
        Classb
    }
}
</script>

<style scoped>
     .header{
        width: 100%;
        height: 0.43rem;
        background: #fd0e14;
        position: fixed;
        top: 0;
        
    }
    .conter{
        width: 3.38rem;
        height: 0.43rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }
     .header  .conter img{
         width: 0.3rem;
         height: 0.3rem;
     }
     .header .left{
         display: flex;
         align-items: center;
     }
     .boy{
         margin-right: 0.1rem;
     }
     .header .left span{
         font-size: 0.23rem;
         color: white;
     }
    




   
     /* 大图 */
     .qzj{
         width: 3.38rem;
         margin: 0 auto;
         margin-bottom: 0.1rem;
     }
     .qzj img{
         width: 100%;
     }
     /* 信息 */
     .message{
         width: 3.38rem;
         margin: 0 auto;
         border-radius: 0.1rem;
         padding-left: 0.1rem;
         box-sizing: border-box;
         background-color: white;
      
     }
     .message p{
         height: 0.55rem;
         border-bottom:1px solid #f8f8fa;
         display: flex;
         justify-content: space-between;
         align-items: center; 
            
     }
     .message p span:nth-child(1){
         font-size: 0.16rem;
         color: black;
     }
     .message p span:nth-child(2){
         font-size: 0.14rem;
         color: #b5b5b5;
     }
     #time{
         font-size:0.1rem;
     }

</style>