<template>
    <div>
        <el-rate v-model="value" disabled show-score text-color="#ff9900" :score-template="valueb"> </el-rate>
    </div>
</template>

<script>
export default {
    
    computed: {
        value(){
            return parseFloat((this.values/2).toFixed(1))
        },

        valueb(){
            return this.values.toString();
        }
    },
    
    props:{
        values:{
            type:[String,Number],
            required:true,
            default:4.3
        }
    }
}
</script>

<style scoped>
   
</style>