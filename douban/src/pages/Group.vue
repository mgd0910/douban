<template>
    <div class="group">
        <header-bar></header-bar>
        <div class="ba">
            <userBar></userBar>
        </div>
        <div class="loging-box" v-if="arrs.length<1?true:false">
            <img src="../../static/img/loading.gif" />
        </div>
        <div>
            <groups :arr="arr1" title="租房找室友" link="更多相关小组"></groups>
            <groups :arr="arr2" title="来聊五块钱" link="来聊五块钱"></groups>
            <groups :arr="arr3" title="买买买" link="更多相关小组"></groups>
        </div>
        <download-app></download-app>
    </div>
</template>
<script>
import HeaderBar from '../components//home/HeaderBar'
import UserBar from '../components/UserBar'
import Groups from '../components/Groups'
import DownloadApp from '../components/DownloadApp'
export default {
    components: {
        HeaderBar,
        UserBar,
        Groups,
        DownloadApp
    },
    data(){
        return{
            arr1:[],
            arr2:[],
            arr3:[],
            arrs:[]
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/group"
        }).then((data)=>{
            // console.log(data.data.xiaozua);
            // console.log(data.data.xiaozub);
            // console.log(data.data.xiaozuc);
            this.arr1=data.data.xiaozua;
            this.arr2=data.data.xiaozub;
            this.arr3=data.data.xiaozuc;
            this.arrs.push( this.arr1,this.arr2,this.arr3);
            // console.log(this.arrs)
        })
    }
}
</script>
<style scoped>
    .group{
        font-size:0px;
    }
    .ba{
        margin-top:0.48rem;
    }

    .loging-box img{
        margin:0 auto;
    }
</style>