<template>
    <div class="subject">
        <div class="group-meta">
            <img src="../../static/img/3.jpg">
            <div class="group-info">
                <span>成都租房</span>
            </div>
            <span class="group-member">20005人</span>
        </div>

        <div class="group-topic">
            <span>3分钟前更新：</span>
            <span>天府四街临江苑套一出租个人 无中介费噢</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
    .subject{
        padding: 0.15rem 0.18rem 0.15rem 0;
    }
    .group-meta{
        display: flex;
        align-items: center;
    }

    .group-meta img{
        width: 0.4rem;
    }

    .group-info{
        flex: 1;
        padding: 0 0.1rem;
        font-size: 0.18rem;
        color: #111;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .group-member{
        color: #ccc;
        font-size: 0.15rem;
    }

    .group-topic{
        margin-top: 0.1rem;
        font-size: 0.15rem;
        color: #aaa;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>