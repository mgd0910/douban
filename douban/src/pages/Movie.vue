<template>
    <div class="movie">
        <div>
            <header-bar></header-bar>
        </div>
        <div class="loging-box" v-if="arrs.length<1?true:false">
            <img src="../../static/img/loading.gif" />
        </div>
        <div class="more">
            <scroller title="影院热映" type="hasCover" :items="arr1"></scroller>
            <scroller title="免费在线观影" type="hasCover" :items="arr2"></scroller>
            <scroller title="新片速递" type="hasCover" :items="arr3"></scroller>
            <scroller title="发现好电影" type="onlyString" :items="arr4"></scroller>
            <types></types>
        </div>
            
    </div>
</template>

<script>
import HeaderBar from '../components/home/HeaderBar'
import Scroller from '../components/Scroller'
import Types from '../components/Types'
export default {
    components: {
        HeaderBar,
        Scroller,
        Types
    },
    data(){
        return {
            arrs:[],
            arr1:[],
            arr2:[],
            arr3:[],
            arr4:[
                {
                title: '同时入选IMDB250和豆瓣电影250的电影',
                    href: '#',
                    color: '#FFAC2D'
                },
                {
                title: '带你进入不正常的世界',
                    href: '#',
                    color: '#FF4055'
                },
                {
                title: '用电【影】来祭奠逝去的岁月',
                    href: '#',
                    color: '#4F9DED'
                },
                {
                title: '女孩们的故事【电影】',
                    href: '#',
                    color: '#FFC46C'
                },
                {
                line: true
                },
                {
                title: '科幻是未来的钥匙——科幻启示录【科幻题材】',
                    href: '#',
                    color: '#2384E8'
                },
                {
                title: '美国生活面面观',
                    href: '#',
                    color: '#3BA94D'
                },
                {
                title: '2015终极期待',
                    href: '#',
                    color: '#42BD56'
                },
                {
                title: '经典韩国电影——收集100部',
                    href: '#',
                    color: '#CC3344'
                }
            ]
        }
    },
    created () {
        this.axios({
            method:"get",
            url:"/movie"
        }).then((data)=>{
            console.log(data.data.movie);
            this.arrs=data.data.movie;
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
    .more{
        margin-top:0.48rem;
    }
    .loging-box{
        margin-top:0.48rem;
    }
    .loging-box img{
        margin:0 auto;
    }
</style>