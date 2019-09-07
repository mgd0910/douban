<template>
    <div class="banner">
        <div class="banner-bg">
            <img src="../../static/img/bg.jpg">
        </div>
        <div class="content">
            <span class="title">每天看点好内容</span>
            <div class="button-wrapper">
                <span class="download">极速下载</span>
                <span class="open">打开</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .banner{
        position: relative;
        margin-top:0.48rem;
        height:0.8rem;
    }
    .banner-bg{
        position: absolute;
    }

    .banner-bg img{
        max-width: 100%;
    }

    .content{
        position: absolute;
        right: 0.1rem;
        left: 0.18rem;
        display: flex;
        height: 0.8rem;
        justify-content: space-between;
        align-items: center;
    }
    .title{
        padding-left: 0.18rem;
        font-size: 0.14rem;
        font-weight: 400;
        line-height: 0.22rem;
        color: #2ca532;
    }

    .button-wrapper {
        font-size:0px;
    }


    .download{
        color: #fff;
        background: #42bd56;
        display: inline-block;
        width: auto;
        padding: 0 0.14rem;
        font-size: 0.13rem;
        font-weight: 700;
        line-height: 2;
        border: 0.01rem solid #42bd56;
        border-radius: 0.03rem;
    }
    .open{
        color: #42bd56;
        display: inline-block;
        width: auto;
        padding: 0 0.14rem;
        font-size: 0.13rem;
        font-weight: 700;
        line-height: 2;
        border: 0.01rem solid #42bd56;
        border-radius: 0.03rem;
    }
</style>