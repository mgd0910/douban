<template>
    <div class="status">
        <div>
            <header-bar></header-bar>
        </div>
        <div class="">
            <banner></banner>
        </div>
        <div>
            <router-link to="/login">
                <user-bar></user-bar>
            </router-link>
        </div>
        <div>
            <content-list></content-list>
            <content-list></content-list>
            <content-list></content-list>
            <content-list></content-list>
            <a href="#" class="list-link">显示更多广播</a>
            <download-app></download-app>
        </div>
    </div>
</template>
<script>
import HeaderBar from '../components/home/HeaderBar'
import Banner from '../components/Banner'
import UserBar from '../components/UserBar'
import ContentList from '../components/ContentList'
import DownloadApp from '../components/DownloadApp'
export default {
    components: {
        HeaderBar,
        Banner,
        UserBar,
        ContentList,
        DownloadApp
    }
}
</script>
<style scoped>
    .list-link{
        display: block;
        padding: 0.15rem 0;
        font-size: 0.16rem;
        line-height: 0.18rem;
        text-align: center;
        color: #42bd56;
    }
</style>