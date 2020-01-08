<!--
 * @Author: your name
 * @Date: 2019-12-28 17:39:03
 * @LastEditTime : 2020-01-04 23:59:27
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\pages\cellphone.vue
 -->
<template>
    <div class="cellphone">
        <back/>
        <searchcell :text="text"/>
        <swiper :imgurl="imgurl"/>
        <sellCellphone/>
        <actionCell/>
        <process/>
    </div>
</template>
<script>
import Swiper from '@/components/swiper'
import Searchcell from '@/components/searchcell'
import Back from '@/components/back'
import SellCellphone from '@/components/sellCellphone'
import ActionCell from '@/components/actionCell'
import Process from '@/components/process'
export default {
    created(){
        this.axios({
            url:"/api/cellphone",
            method:"get"
        }).then((ok)=>{
            window.console.log(ok.data.imgurl)
            this.imgurl=ok.data.imgurl
        })
    },
    data() {
        return {
            text:"请输入您要卖的机型",
            imgurl:[]
        }
    },
    components:{
        Swiper,Searchcell,Back,SellCellphone,ActionCell,Process
    }
}
</script>
<style scoped>
.cellphone>>>.van-swipe{
    height: 1.4rem;
}
.cellphone>>>.van-swipe img{
    height: 1.4rem;
}
.back{
    margin: 15px 0 0 10px;
    float: left;
}
.cellphone>>>#search{
    width: 90%;
    float: left;
}
.cellphone>>>.sell{
    position: absolute;
    top: 1.8rem;
    left: .19rem;
}
.cellphone>>>#action{
    margin-top: 1.9rem;
}
</style>