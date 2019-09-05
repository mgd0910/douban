<template>
    <div class="types">
        <h2>分类浏览</h2>
        <div class="content">
            <ul class="type-list">
                <li v-for="(v,i) in arr" :key="i">
                    <a href="v.href">
                        {{v.title}}
                        <span></span>
                    </a>
                </li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'types',
    data () {
        return {
            arr: [
                {
                    title: '经典',
                    href: 'movie/classic'
                },
                {
                    title: '冷门佳片',
                    href: 'movie/underrated'
                },
                {
                    title: '豆瓣高分',
                    href: 'movie/doubantop'
                },
                {
                    title: '动作',
                    href: 'movie/action'
                },
                {
                    title: '喜剧',
                    href: 'movie/comedy'
                },
                {
                    title: '爱情',
                    href: 'movie/love'
                },
                {
                    title: '悬疑',
                    href: 'movie/mystery'
                },
                {
                    title: '恐怖',
                    href: 'movie/horror'
                },
                {
                    title: '科幻',
                    href: 'movie/scifi'
                },
                {
                    title: '治愈',
                    href: 'movie/sweet'
                },
                {
                    title: '文艺',
                    href: 'movie/artfilm'
                },
                {
                    title: '成长',
                    href: 'movie/youth'
                },
                {
                    title: '动画',
                    href: 'movie/animation'
                },
                {
                    title: '华语',
                    href: 'movie/chinese'
                },
                {
                    title: '欧美',
                    href: 'movie/western'
                },
                {
                    title: '韩国',
                    href: 'movie/korean'
                },
                {
                    title: '日本',
                    href: 'movie/japanese'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .types {
        margin-top: 0.1rem;
    }

    .types h2 {
        height: 0.26rem;
        line-height: 0.26rem;
        padding: 0 0.26rem;
        display: inline-block;
        font-size:0.168rem;
    }

    .type-list {
        margin: 0.16rem 0 0 0.16rem;
        overflow: hidden;
    }

    .type-list li {
        list-style: none;
        float: left;
        box-sizing: border-box;
        width: 50%;
        padding-right: 0.18rem;
        height: 0.42rem;
        line-height: 0.42rem;
        font-size: 0.16rem;
        border-top: solid 0.01rem #eee;
        border-right: solid 0.01rem #eee;
    }

    .type-list li:nth-child(2n) {
        padding-left: 0.18rem;
    }

    .type-list span {
        color: #ccc;
        float: right;
        font-weight: bold;
        display: inline-block;
        border-right: solid 0.01rem #ccc;
        border-bottom: solid 0.01rem #ccc;
        width: 0.08rem;
        height: 0.08rem;
        transform: rotate(-45deg);
        margin-top: 0.1rem;
    }

    .type-list li a {
        color: #42bd56;
    }


</style>