<template>
<div class="r">
    <div class="phonezi" v-for="(v,i) in obj" :key="i">
            <img :src="v.src">
            <p>{{v.title}}</p>
    </div>
</div>
    
</template>

<script>

export default {
    data() {
        return {
            obj:[
                {src:"gjmsj.png",title:"卖手机"},
                {src:"djqgj.png",title:"低价趣购机"},
              
    
                {src:"djpj.png",title:"低价配件"},
                  {src:"qctm.png",title:"清仓特卖"},
                {src:"fqed.png",title:"分期额度"},
                {src:"jqgj.png",title:"低息借钱购机"},
                {src:"gjx.png",title:"工具箱"},
                {src:"zshz.png",title:"招商合作"},
            ]
        }
    },
    components:{
       
    }
}
</script>

<style scoped>
    .phonezi{
        text-align: center;
        display:inline-block;
        width: 25%;
       
        background-color: #ffffff;
    }  
    .r{
        width: 3.38rem;
        margin: 0 auto;
        border-radius: 0.1rem;
        margin-bottom: 0.1rem;

    }
    .phonezi img{
        width: 0.5rem;
        height: 0.5rem;
        margin-bottom: 0.05rem;
    }
    .phonezi p{
        font-size: 0.12rem;
        color: black;
    }

</style>