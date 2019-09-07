<template>
    <div class="content-list">
        <div class="card">
            <div class="desc">
                <a href="#">
                    <img src="../../static/img/4.gif">
                </a>
                <a href="#">
                    <div class="user-info">
                        <strong>
                            豆瓣
                            <span>写了日记</span>
                        </strong>
                        <div class="timestamp">2017-03-01 19:30:41</div>
                    </div>
                </a>
            </div>
            <div class="article-card">
                <div class="title">
                    豆瓣App 4.12.0 主要更新
                </div>
                <div class="detail">
                    - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
                </div>
            </div>
            <div class="info">
                <span class="btn">
                    <img src="../../static/img/8.gif">
                    <i>4</i>
                </span>
                <span class="btn">
                    <img src="../../static/img/9.gif">
                    <i>0</i>
                </span>
                <span class="btn">
                    <img src="../../static/img/10.gif">
                    <i>1</i>
                </span>
                <span class="more">
                    <img src="../../static/img/11.gif">
                    <img src="../../static/img/11.gif">
                    <img src="../../static/img/11.gif">
                </span>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .card{
        position: relative;
        padding: 0 0 0.2rem 0.5rem;
        margin: 0.2rem 0.18rem;
    }
    .desc{
        margin-left:-0.5rem;
        padding-bottom:15%
    }
    .desc a{
        float: left;
    }
    .desc a:last-child{
        margin-top:1%
    }
    .desc img{
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.1rem;
        border-radius: 50%;
    }

    .user-info{
        display: inline-block;
    }

    .user-info strong{
        font-size: 0.17rem;
        line-height: 1;
        color: #494949;
    }

    .user-info strong span{
        color: #aaa;
        font-weight: 400;
    }
    .user-info .timestamp{
        font-size: 0.14rem;
        margin-top: 0.06rem;
        line-height: 1;
        color: #aaa;
    }

    .article-card{
        margin: 0.1rem 0 0.2rem;
        padding: 0.15rem;
        border-radius: 0.02rem;
        border: 0.01rem solid #d8d8d8;
    }

    .article-card .title{
        font-size: 0.17rem;
        font-weight: 500;
        line-height: 1.4;
        color: #494949;
        margin-bottom: 0.05rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .article-card .detail{
        font-size: 0.12rem;
        line-height: 0.16rem;
        color: #aaa;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .info {
        margin-right: 0.2rem;
        font-size: 0.14rem;
    }
    .info .btn{
        display: inline-block;
        margin-right:10%;
    }
    .info .btn i{
        font-style: normal;
        color: #ccc;
        margin-left: 0.03rem;
        margin-top: -0.03rem;
    }

    .info .btn img{
        float: left;
    }

    .info .more{
        float: right;
        margin-right: 0;
        width:10%;
    }

    .info .more img{
        float: left;
        margin-top:45%;
        margin-left:10%;
    }

</style>