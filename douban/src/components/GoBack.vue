<template>
    
        <span @click="fun()">取消</span>

</template>

<script>
export default {
    methods:{
        fun(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
    div{
        width:auto;
        height:auto;
    }
    div>span{
        font-size:0.16rem;
        color:#42bd56;
        margin-left:0.18rem;
        float: left;
    }
</style>