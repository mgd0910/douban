<template>
    <div class="navCon">
        <div v-for="(v,i) in items" :key="i">
            <router-link :to="v.urls">
                <h3 :style="{color:v.color}">{{v.title}}</h3>
                <p>{{v.titles}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        items:{
            type:Array,
            required:true
        }
    }
}
</script>

<style scoped>
    .navCon {
        margin-top:20%;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }
    .navCon div {
        margin-bottom: 0.2rem;
        width: 33.33%;
        text-align: center;
        margin-bottom: 0.25rem;
    }
    .navCon div a {
        display: block;
        width: 100%;
        height: 100%;
    }
    .navCon div h3 {
        font-size: 0.24rem;
        font-weight: 400;
        line-height: 0.28rem;
    }
    .navCon div p {
        font-size: 0.12rem;
        color: #999;
        height: 0.17rem;
    }
</style>