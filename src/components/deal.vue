<template>
    <div>
        <div class="deal">
            <div class="cmp">
                <img src="wmdd.png">
                <p>我买到的</p>
            </div>
            <div class="cmp">
                <img src="wmcd.png">
                <p>我卖出的</p>
            </div>
            <div class="cmp">
                <img src="wzyd.png">
                <p>我租用的</p>
            </div>  
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
     .deal{
         width: 3.38rem;
         height: 1.03rem;
         background-color: #ffffff;
         border-radius: 0.1rem;
         margin: 0 auto;
         margin-top:0.5rem;
         margin-bottom:0.1rem;
         display: flex;
         justify-content: space-around;
         align-items: center;
     }
     .deal .cmp{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;

     }
    .deal img{
        width: 0.34rem;
        height: 0.34rem;
        margin-bottom: 0.1rem;
    }
    .deal p{
        font-size: 0.12rem;
    }
</style>