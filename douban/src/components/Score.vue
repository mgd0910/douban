<template>
    <div>
        <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"> </el-rate>
    </div>
</template>

<script>
export default {
    // data() {
    //   return {
    //     value: 3.7
    //   }
    // }
    computed: {
        value(){
            return parseFloat((this.values/2).toFixed(1))
        }
    },
    props:{
        values:{
            type:Number,
            required:true
        }
    }
}
</script>

<style>
    .el-rate__icon{
        font-size: .14rem;
        margin-right: 0;
    }
</style>