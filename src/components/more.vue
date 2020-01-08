<!--
 * @Author: your name
 * @Date: 2019-12-30 21:11:14
 * @LastEditTime : 2019-12-31 09:50:44
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\more.vue
 -->
<template>
    <div>
        <div class="more">
            <div class="more-left">
                <ul>
                    <li><span>靓机直播</span><img src="zhibo.jpg"></li>
                    <li><span>品牌旗舰&nbsp;&nbsp;下单立减</span></li>
                    <li><img src="daiyan.jpg"> <img src="erji.jpg"></li>
                    <li><span>去租机</span>&nbsp;&nbsp;<span>限时秒杀</span></li>
                    <li><img src="iphone11.jpg" class="iphone"><img src="iphone11pro.jpg"></li>
                </ul>
            </div>
            <div class="more-right">
                <ul>
                    <li><span>高价卖手机</span><img src="zuigao.jpg"></li>
                    <li><img src="touxiang.jpg"><span>赚了￥1666</span></li>
                    <li>
                        <img src="myphone.jpg"> 
                        <div class="local">
                            <p>最高价￥<i>1936</i></p>
                            <p>本机</p>
                            <p>红米&nbsp;K20&nbsp;Pro</p>
                        </div>
                    </li>
                    <li><span>二手集市</span>&nbsp;&nbsp;<span>工具箱</span></li>
                    <li><img src="chongdianqi.jpg" class="iphone"><img src="gongju.jpg"></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .more{
        width: 3.3rem;
        height: 1.89rem;
        padding: 10px 10px 0 10px;
        background-color: #fff;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
    }
    .more-right{
        width: 48%;
    }
    .more-left{
        width: 48%;
    }
    .more-left ul :nth-child(1) img{
        width: .68rem;
        height: .2rem;
        vertical-align: middle;
        margin: 0 0 0 5px;
    }
    .more-left ul :nth-child(2) span{
        font-size: 14px;
        color: #f4b484;
    }
    
    .more-left ul :nth-child(3) img{
        width: .6rem;
    }
    .more-left ul :nth-child(4) span{
        font-size: 18px;
    }
    .more-left ul :nth-child(5){
        margin: 10px 0 0 0;
    }
    .more-left ul :nth-child(5) img{
        width: .5rem;
    }
    .more-left .iphone{
        margin: 0 30px 0 0;
    }


    .more-right ul :nth-child(1) img{
        width: .68rem;
        height: .2rem;
        vertical-align: middle;
        margin: 0 0 0 5px;
    }
    .more-right ul :nth-child(2){
        height:.2rem;
    }
    
    .more-right ul :nth-child(2) img{
        width: .2rem;
        height:.2rem;
        vertical-align: middle;
    }
     .more-right ul :nth-child(2) span{
        color: #cf4f5e;
        vertical-align: middle;
    }
    .more-right ul :nth-child(3) img{
        width: .4rem;
        margin-right: 5px;
    }
    .more-right ul :nth-child(4) span{
        font-size: 18px;
    }
    
    .more-right ul :nth-child(5){
        margin: 10px 0 0 0;
    }
    .more-right ul :nth-child(5) img{
        width: .5rem;
        height: .47rem;
        vertical-align: middle;
    }
    .more-right .iphone{
        margin: 0 30px 0 0;
    }
    .local{
        color: black;
        font-size: 14px;
        display: inline-block;
    }
    .local i{
        font-style: normal;
        font-size:.2rem; 
    }
    .local :nth-child(2){
        text-align: center;
        color: #fff;
        width: .5rem;
        background-color: #9b9b9b;
    }
</style>