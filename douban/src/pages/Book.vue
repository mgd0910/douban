<template>
    <div class="book">
        <div>
            <header-bar></header-bar>
        </div>
        <div class="loging-box" v-if="arrs.length<1?true:false">
            <img src="../../static/img/loading.gif" />
        </div>
        <div class="more">
            <scroller title="最受关注图书｜虚构类" type="hasCover" :items="arr1"></scroller>
            <scroller title="最受关注图书｜非虚构类" type="hasCover" :items="arr2"></scroller>
            <scroller title="豆瓣纸书" type="hasCover" :items="arr3">
                <div class="promItem"  slot="promItem">
                    <img class="corver" src="../../static/img/1.jpg">
                    <div class="content"  slot="promItem">
                        <span class="price">¥ 68</span>
                        <p class="name">造物</p>
                        <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
                    </div>
                </div>
            </scroller>
            <scroller title="发现好书" type="onlyString" :items="arr4"></scroller>
            <types></types>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/home/HeaderBar'
import Scroller from '../components/Scroller'
import Types from '../components/Types'
export default {
    data(){
        return {
            arrs:[],
            arr1:[],
            arr2:[],
            arr3:[],
            arr4:[
                {
                    title: '不可饶恕的女人们',
                    href: 'https://m.douban.com/doulist/35573',
                    color: '#42BD56'
                },
                {
                    title: '爱欲书',
                    href: 'https://m.douban.com/doulist/38088147',
                    color: '#FF4055'
                },
                {
                    title: '他们还写侦探小说',
                    href: 'https://m.douban.com/doulist/645579',
                    color: '#4F9DED'
                },
                {
                    line: true
                },
                {
                    title: '人生识字始忧患',
                    href: 'https://m.douban.com/doulist/192653',
                    color: '#CC3344'
                },
                {
                    title: '詩歌書店',
                    href: 'https://m.douban.com/doulist/89925',
                    color: '#FFAC2D'
                },
                {
                    title: '尝试理解人类变化无常不可测心理相关小荐',
                    href: 'https://m.douban.com/doulist/45361809',
                    color: '#3BA94D'
                }
            ]
        }
    },
    components: {
        HeaderBar,
        Scroller,
        Types
    },
    created () {
        this.axios({
            method:"get",
            url:"/book"
        }).then((data)=>{
            console.log(data.data.books);
            this.arrs=data.data.books;
            this.arrs.filter((v,i)=>{
                if(i<16){
                    this.arr1.push(this.arrs[i])
                }
                return;
            })
            this.arrs.filter((v,i)=>{
                if(i>15&&i<31){
                    this.arr2.push(this.arrs[i])
                }
                return;
            })
            this.arrs.filter((v,i)=>{
                if(i>30&&i<46){
                    this.arr3.push(this.arrs[i])
                }
                return;
            })
        })
    }
}
</script>

<style scoped>
    .book{
        font-size:0px;
    }
    .more{
        margin-top:0.48rem;
    }
    .promItem {
        overflow: hidden;
        margin: 0.16rem 0.18rem 0.08rem 0.16rem;
    }

    .corver {
        float: left;
        width: 1rem;
        margin-right: 0.15rem;
    }

    .content {
        margin-right: 0.1rem;
    }

    .name {
        font-size: 0.2rem;
        color: #494949;
        margin: 0.1rem;
        max-width: 100%;
        line-height: 0.22rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }

    .price {
        float: right;
        color: #E76648;
        font-size: 0.16rem;
        line-height: 0.22rem;
    }

    .info {
        font-size: 0.13rem;
        font-weight: 300;
        line-height: 1.5;
        color: #9B9B9B;
    }

    .loging-box{
        margin-top:0.48rem;
    }
    .loging-box img{
        margin:0 auto;
    }

</style>