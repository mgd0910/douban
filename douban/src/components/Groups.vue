<template>
    <div class="group">
        <div class="header">
            <h2>{{title}}</h2>
        </div>
        <ul class="content">
            <li v-for="(v,i) in arr" :key="i">
                <a href="#">
                    <div class="group-meta">
                        <img :src="v.images.small" alt="哈哈">
                        <div class="group-info">
                            <span>{{v.title}}</span>
                        </div>
                        <span class="group-member">{{v.group_member}}人</span>
                    </div>

                    <div class="group-topic">
                        <span>{{v.group_topic.time}}</span>
                        <span>{{v.group_topic.title}}</span>
                    </div>
                </a>
            </li>
        </ul>
        <a href="#" class="list-link">{{link}}</a>
    </div>
</template>

<script>
export default {
    
    props:{
        arr:{
            type:Array,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>
    .group{
        margin-left: 0.18rem;
        padding-top: 0.14rem;
    }

    h2{
        font-size:0.168rem;
        font-weight: 400;
        color: #111;
    }

    .content{
        position: relative;
    }

    .content li{
        padding:5% 0;
        border-bottom: 0.1px solid #f2f2f2;
        overflow: hidden;

    }

    .content li a{
        padding: 0.15rem 0.18rem 0.15rem 0;
    }

    .list-link{
        display: block;
        margin-bottom: 0.3rem;
        padding: 0.15rem 0;
        font-size: 0.16rem;
        line-height: 0.18rem;
        text-align: center;
        color: #42bd56;
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