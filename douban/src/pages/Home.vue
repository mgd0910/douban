<template>
    <div class="pages-view">
        <div>
            <header-bar></header-bar>
        </div>
        <div>
            <navs></navs>
        </div>
        <div class="loging-box" v-if="obj.length<1?true:false">
            <img src="../../static/img/loading.gif" />
        </div>
        <dir v-for="(v,i) in obj" :key="i">
            <router-link :to="{path:'/detail',query:{id:v.id}}">
                <list :title="v.title" :imgsrc="v.image" :content="v.content" :name="v.fee_str"></list>
            </router-link>
        </dir>
        
    </div>
</template>

<script>
import HeaderBar from "../components/home/HeaderBar";
import List from '../components/home/List'
import Navs from '../components/home/Nav'
export default {
    components: {
        HeaderBar,
        List,
        Navs
    },
    data(){
        return{
            obj:[]
        }
    },
    methods: {
        open() {
            this.talion = "open";
        },
        close() {
            this.talion = "";
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/home"
        }).then((data)=>{
            // console.log(data.data.shouye);
            this.obj=data.data.shouye;
        })
    }
};
</script>

<style scoped>

.loging-box img{
    margin:0 auto;
}
</style>