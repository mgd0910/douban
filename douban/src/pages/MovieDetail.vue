<template>
    <div class="md">
        <header-bar></header-bar>
        <div class="all">
            <banner></banner>
            <div>
                <mdetail></mdetail>
            </div>
            <content-list></content-list>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/home/HeaderBar'
import Banner from '../components/Banner'
import ContentList from '../components/ContentList'
import Mdetail from '../components/Mdetail'
export default {
    components: {
        HeaderBar,
        Banner,
        ContentList,
        Mdetail
    },
    data(){
        return {
            obj:[]
        }
    },
    created () {
        this.axios({
            method:"get",
            url:"/moviedetail"
        }).then((data)=>{
            console.log(data.data.movie[0])
            this.obj=data.data.movie;
        })
    }
}
</script>

<style scoped>
    .md{
        font-size:0px;
    }
    .all{
        margin-top:0.48rem;
    }
</style>