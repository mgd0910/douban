<template>
    <div class="scroller">
        <div class="header">
            <h2>{{title}}</h2>
            <a href="#">更多</a>
        </div>
        <div class="content">
            <slot name="promItem"></slot>
            <ul class="hasCover" v-if="type == 'hasCover'">
                <li v-for="(v,i) in items" :key="i">
                    <router-link to="/moviedetail">
                        <img v-if="v.images" :src="v.images.large">
                        <span class="title">{{v.title}}</span>
                        <score :values="v.rating.average"></score>
                    </router-link>
                </li>
            </ul>
            <ul class="onlyString" v-if="type == 'onlyString'">
                <li v-for="(v,i) in items" :key="i">
                    <a :href="v.href" v-if="!v.line" :style="{color: v.color}">{{v.title}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Score from '../components/Score'
export default {
    components: {
        Score
    },
    props:{
        title:{
            type:String,
            required:true
        },
        type:{
            type:String,
            required:true
        },
        items:{
            type:Array,
            required:true
        }
    }
}
</script>

<style scoped>
    .scroller{
        padding-top: 0.1rem;
    }

    .header{
        height: 0.26rem;
        line-height: 0.26rem;
        padding: 0 0.16rem;
    } 

    .header h2{
        display: inline-block;
        font-size:0.168rem;
    }

    .header a{
        color: #42bd56;
        float: right;
        font-size: 0.144rem;
    }
    
    .content{
        box-sizing: content-box;
    }

    .content ul{
        padding: 0.08rem 0;
    }

    .hasCover{
        overflow-x: auto;
        white-space: nowrap;
        text-align: center;
    }

    .hasCover .title{
        display: block;
        max-width: 100%;
        margin-top: 0.1rem;
        line-height: 0.16rem;
        font-size: 0.16rem;
        color: #111;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }

    .hasCover li{
        display: inline-block;
        width: 1rem;
        margin-left: 0.1rem;
    }

    .hasCover li:first-child {
        /* padding-left: 0.8rem; */
    }

    .hasCover img{
        height: 1.5rem;
    }

    .onlyString{
        overflow-x: auto;
        white-space: nowrap;
    }

    .onlyString li {
        display: inline-block;
        margin: 0 0 0.08rem 0.16rem;
        font-size: 0.16rem;
        border: solid 0.01rem;
        border-radius: 0.04rem;
        vertical-align: middle;
        border-color: #FFAC2D;
    }

    .onlyString a {
        height: 0.5rem;
        line-height: 0.5rem;
        padding: 0 0.24rem;
        letter-spacing: 0.016rem;
        overflow: auto;
        display: block;
        text-align: center;
    }

    .onlyString li:empty {
        width: 100%;
        display: block;
        height: 0.01rem;
        border: 0;
        margin: 0;
    }
</style>
    