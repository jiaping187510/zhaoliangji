<!--
 * @Author: your name
 * @Date: 2020-01-02 16:40:21
 * @LastEditTime : 2020-01-02 17:20:12
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\components\arrow.vue
 -->
<template>
    <div class="back">
        <img src="left-arrow.png" @click="back">
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.back{
    width: .2rem;
}
</style>