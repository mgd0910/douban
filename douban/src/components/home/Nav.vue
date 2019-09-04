<template>
    <div class="quick-nav">
        <router-link to="/">影院热映</router-link>
        <router-link to="/">欧美新碟榜</router-link>
        <router-link to="/reg">注册账号</router-link>
        <router-link to="/login">登录账号</router-link>
    </div>
</template>

<script>
export default {
    title:{
        type:String,
        required:true
    }
}
</script>

<style scoped>
    .quick-nav {
        padding: 0 0.2rem;
        margin-top: 0.7rem;
        font-size: 0;
        overflow: hidden;
    }
    .quick-nav a {
        float: left;
        width: 48.8%;
        text-align: center;
        list-style: none;
        background-color: #f6f6f6;
        margin-bottom: 0.08rem;
        border-radius: 0.02rem;
        font-size: 0.15rem;
        display: block;
        height: 0.4rem;
        line-height: 0.4rem;
        color: #494949;
    }
    .quick-nav a:nth-child(1) {
        margin-right: 0.08rem;
    }
    .quick-nav a:nth-child(3) {
        margin-right: 0.08rem;
    }
</style>