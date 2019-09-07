<template>
    <div class="talion">
        <div class="con">
            <go-back title="关闭"></go-back>
            <input type="text" id="txtId">
        </div>
        <nav-con :items="arr"></nav-con>
        <div class="navBottom">
            <div class="nav-item">
                <router-link to="/reg">注册帐号</router-link>
                <router-link to="/login">登录豆瓣</router-link>
            </div>
            <div class="nav-item">
                <router-link to="/home">使用桌面版</router-link>
                <router-link to="/home">使用豆瓣App</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import GoBack from '../components/GoBack'
import NavCon from '../components/NavCon'
export default {
    components: {
        GoBack,
        NavCon
    },
    data(){
        return{
            arr:[]
        }
    },
    created () {
        this.axios({
            method:"get",
            url:"/talion"
        }).then((data)=>{
            // console.log(data.data.talion)
            this.arr=data.data.talion
        })
    }
}
</script>

<style scoped>
    .con {
        width: 100%;
        height: 0.48rem;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        padding: 0 0.1rem;
        background-color: #ffffff;
        font-size: 0.16rem;
        border-bottom: 0.01rem solid #f3f3f3;
    }

    .con span{
        display:inline-block;
        margin-left: 0.1rem;
        font-size:0.14rem;
        float:left;
    }

    .con input {
        margin-left: 0.1rem;
        width: 2.97rem;
        height: 0.3rem;
        border: none;
        background:url(../../static/img/3.gif) no-repeat 50% #f3f3f3;
        /* outline: none; */
    }

    .navBottom {
        font-size: 0;
        width: 100%;
        border-bottom: 0.01rem solid #f3f3f3;
    }
.navBottom .nav-item {
  border-top: 0.01rem solid #f3f3f3;
  padding: 0.13rem 0;
  text-align: center;
}
.navBottom .nav-item a {
  width: 50%;
  display: inline-block;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 0.15rem;
  color: #42bd56;
}
.navBottom .nav-item a {
  width: 50%;
  display: inline-block;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 0.15rem;
  color: #42bd56;
}
.navBottom .nav-item a:first-child {
  border-right: 0.01rem solid #e5e5e5;
}
</style>