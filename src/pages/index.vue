<!--
 * @Author: your name
 * @Date: 2019-12-28 15:51:18
 * @LastEditTime : 2020-01-04 21:07:10
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\pages\index.vue
 -->
<template>
    <div class="index">
        <search :text="text" :gou="gou"></search>
        <Footer/>
        <swiper :imgurl="lunimgarr"/>
        <ul class="icon">
            <li><img src="year.png"><span>365天质保</span></li>
            <li><img src="website.png"><span>官方质检</span></li>
            <li><img src="check.png"><span>一机一拍</span></li>
            <li><img src="sf.png"><span>顺丰包邮</span></li>
        </ul>
        <action/>
        <more/>
        <myfilter/>
        <indexsort/>
        <goodslist :goodsarr="goodsarr"/>
    </div>
</template>
<script>
import Search from '@/components/search'
import Footer from '@/components/Footer'
import swiper from '@/components/swiper'
import Action from '@/components/action'
import More from '@/components/more'
import Myfilter from '@/components/myfilter'
import Indexsort from '@/components/indexsort'
import Goodslist from '@/components/goodslist'
export default {
    created(){
        this.axios({
            url:"/api/goodslist",
            method:"get"
        }).then((ok)=>{
            window.console.log(ok.data.goodslist)
            this.goodsarr=ok.data.goodslist;
        }),
        this.axios({
            url:"/api/swiperIndex",
            method:"get",
        }).then((ok)=>{
            window.console.log(ok.data.lunimg)
            this.lunimgarr=ok.data.lunimg;

        })
    },
    data() {
        return {
            text:"苹果XR/XS系列:地址3150元",
            gou:"icon_mine_shop_cart.png",
            goodsarr:[],
            lunimgarr:[],
        }
    },
    components:{
        Search,Footer,swiper,Action,More,Myfilter,Indexsort,Goodslist,
    }
}
</script>
<style scoped>
    .index{
        position: relative;
        background-color: #f7f6f4;

    }
    .index>>>.van-swipe{
        position: absolute;
        top: .6rem;
    }
    .icon{
        display: flex;
        justify-content: space-around;
        margin: .45rem 0 0 2px ;
    }
    .icon li{
        width: 20%;
        font-size: 12px;
    }
    .icon img{
        width: .15rem;
        height: .15rem;
        vertical-align: middle;
    }
    .icon span{
        display: inline-block;
        vertical-align: middle;
        padding-left: 2px;
    }
    .action{
        margin: 10px 0 0 0;
    }
    .index>>>.action{
        margin-top: .2rem;
    }
    .index>>>.more{
        margin-top: .2rem;
    }
    .index>>>.myfilter{
        margin-top: .2rem;
    }
    .index>>>#search{
        background: #fc1b19;
    }
    
</style>
