<template>
    <div class="download-app">
        <div class="info">
            <img src="../../static/img/3.gif">
            <div class="info-content">
                <strong>豆瓣</strong>
                <div>我们的精神角落</div>
            </div>
        </div>
        <a href="#">去 App Store 免费下载 iOS 客户端</a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .download-app{
        padding: 0 0 0.2rem;
        margin-top: 0.5rem;
        margin-bottom: 0.3rem;
        text-align: center;
        font-size: 0.15rem;
    }

    .info{
        margin: 0 auto 0.15rem;
        overflow: hidden;
        text-align: left;
        font-size: 0.14rem;
        display: inline-block;
        color: #111;
    }
    img{
        float: left;
        width: 0.48rem;
        height: 0.48rem;
        margin-right: 0.12rem;
    }
    .info-content{
        overflow: hidden;
    }
    strong{
        font-size: 0.24rem;
        font-weight: 400;
        line-height: 0.28rem;
    }
    .download-app a{
        display: block;
        color: #42bd56;
        text-decoration: none;
    }

</style>