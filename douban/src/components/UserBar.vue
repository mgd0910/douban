<template>
    <div class="user-bar">
        <div class="avatar">
            <img src="../../static/img/5.gif">
        </div>
        <div class="holder">
            请先登录
        </div>
        <div class="icon">
            <img src="../../static/img/6.gif">
        </div>
        <div class="icon">
            <img src="../../static/img/7.gif">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .user-bar{
        position: relative;
        padding: 0.1rem 0.18rem;
        overflow: hidden;
    }

    .user-bar .avatar{
        width: 0.4rem;
        height: 0.4rem;
        float: left;
    }

    .user-bar .avatar img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .user-bar .holder{
        float: left;
        padding-left: 0.1rem;
        line-height: 0.4rem;
        font-size: 0.15rem;
        color: #aaa;
    }

    .user-bar .icon{
        content: "";
        width: 0.4rem;
        height: 0.4rem;
        padding: 0.08rem;
        margin-left: 0.08rem;
        float: right;
        box-sizing: border-box;
    }

    .user-bar .icon img{
        width: 100%;
        height: 100%;
    }

</style>