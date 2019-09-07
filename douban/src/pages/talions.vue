<template>
    <div class="talion">
        <div class="header-bar">
            <span class="close-talion" @click="closeTalion()">关闭</span>
            <form class="search">
                <input type="text" @keyup.enter="goSearch()">
            </form>
        </div>
        <ul>
            <li>
                <div>
                    <a href="#">
                        <strong style="color: #2384E8;">电影</strong>
                        <span>影院热映</span>
                    </a>
                    <a href="#">
                        <strong style="color: #E6467E;">同城</strong>
                        <span>周末活动</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: #9F7860;">阅读</strong>
                        <span>电子书</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: #E1644D;">东西</strong>
                        <span>心爱之物</span>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <a href="#">
                        <strong style="color:#7A6ADB;">电视</strong>
                        <span>正在热播</span>
                    </a>
                    <a href="#">
                        <strong style="color: #2AB8CC;">小组</strong>
                        <span>志趣相投</span>       
                    </a>
                    <a href="#">
                        <strong style="color: #5774C5;">游戏</strong>
                        <span>虚拟世界</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color:#40CFA9;">FM</strong>
                        <span>红心歌单</span>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <a href="#" target="_blank">
                        <strong style="color: #9F7860;">图书</strong>
                        <span>畅销排行</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: #F48F2E;">音乐</strong>
                        <span>新碟榜</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color:  #596CDD;">应用</strong>
                        <span>玩手机</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: #42BD56;">市集</strong>
                        <span>购买原创</span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    // name:"Talion",
    
    methods: {
        closeTalion(){
            this.$emit("closeTalion")
        }
    }
}
</script>

<style scoped>
    .talion{
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: 999;
        margin-left:-1%;
    }
    .close-talion{
        color: #42bd56;
        font-size: 0.16rem;
    }

    .search {
        flex: 1;
        width: 100%;
        padding-left: 0.1rem;
    }

    input{
        box-sizing: border-box;
        border: 0;
        background: url(../../static/img/3.gif) no-repeat 50% #f3f3f3;
        background-size: 0.173rem;
        border-radius: 0.03rem;
        width: 100%;
        height: 0.32rem;
        font-size: 0.14rem;
    }

    input::focus {
        background: #f3f3f3;
    }

    ul{
        display: flex;
        justify-content: space-around;
        padding-top: 0.25rem;
    }

    li{
        width: 33.33%;
    }

    div{
        position: relative;
        float: left;
        left: 50%;
        top: 0;
    }

    a {
        position: relative;
        left: -50%;
        top: 0;
        display: block;
        margin-bottom: 0.25rem;
        text-align: center;
    }

    strong {
        display: block;
        font-weight: 400;
        font-size: 0.24rem;
        line-height: 0.28rem;
    }

    span {
        display: block;
        color: #999;
        height: 0.17rem;
        font-size: 0.12rem;
        letter-spacing: 0.01rem;
    }
</style>