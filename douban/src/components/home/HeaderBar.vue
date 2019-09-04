<template>
    <div class="header-bar">
        <h1>
            <router-link :to="{name:'Home'}">豆瓣</router-link>
        </h1>
        <ul>
            <li v-for="(v,i) in obj" :key='i'><router-link :to="v.url" :style="v.color">{{v.title}}</router-link></li>
            <li class="talion"><router-link to="/talion">&nbsp;&nbsp;&nbsp;&nbsp;</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        showTalion: function () {
            window.location.href="/talion"
        }
    },
    data(){
        return{
            obj:[
                {title:"电影",url:"/movie",color:"color:#2384e8"},
                {title:"图书",url:"/book",color:"color:#9f7860"},
                {title:"广播",url:"/status",color:"color:#e4a813"},
                {title:"小组",url:"/group",color:"color:#2ab8cc"}
            ]
        }
    }
}
</script>

<style scoped>
    .header-bar{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        height: 0.48rem;
        padding: 0 0.18rem;
        background: #fff;
        border-bottom: 0.01rem solid #f3f3f3;
    }
    .header-bar h1{
        flex: 1;
        max-width: 0.46rem;
        max-height: 0.22rem;
        margin-right: 0.18rem;
        font-size: 0;
        line-height: 0.32rem;
        color: #00b600;
        word-break: break-all;
        background: url(../../../static/img/1.gif) no-repeat;
        background-size: cover;
    }

    .header-bar h1 a{
        display: block;
    }

    .header-bar ul {
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }

    .header-bar li {
        display: inline-block;
        font-size: 0.16rem;
        margin-right: 0.12rem;
    }
    .header-bar li a{
        font-size: 0.16rem;
    }

    .header-bar .talion {
        background: url(../../../static/img/2.gif) no-repeat;
        background-size: cover;
        width: 0.24rem;
        height: 0.18rem;
        margin-top: 0.04rem;
    }
</style>