<template>
<div>
    <div class="bigbox">
        <go-back title="取消"></go-back>
        <h1>登录豆瓣</h1>
    </div>
    <div class="meun">
        <input type="text" id="email" name="" placeholder="邮箱" v-model="emailtext">
        <input type="password" name="" id="pwd" placeholder="密码" v-model="pwdtext">
        <btn btntext="登录" :emailtxt="emailtext" :pwdtxt="pwdtext" :i="i"></btn>
    </div>
    <div class="footer">
        <div class="moreLogin">使用其他方式登录 & 找回密码</div>
        <div class="btns">
            <a href="#">注册豆瓣帐号</a>
            <a href="#">下载豆瓣App</a>
        </div>
    </div>
</div>
    
</template>

<script>
import GoBack from '../components/GoBack'
import Btn from '../components/regAndLogin/Btn'

export default {
    components: {
        GoBack,
        Btn
    },
    data(){
        return {
            emailtext:'',
            pwdtext:'',
            i:'0'
        }
    }
}
</script>

<style scoped>
    
    .bigbox{
        width:100%;
        height:0.45rem;
        line-height: 0.45rem;
        margin-bottom:0.1rem;
        border-bottom:0.01rem solid #eeeeee;
    }
    h1{
        font-size:0.18rem;
        color:black;
        text-align: center;
        padding-right:0.6rem;
    }
    .meun{
        font-size:0.16rem;
        box-sizing: border-box;
        padding:0.2rem 0.15rem;
    } 

    .moreLogin{
        font-size:0.15rem;
        text-align: center;
        color:#aaa;
    }

    input{
        width:100%;
        height:0.42rem;
        text-indent: 0.2rem;
    }

    .footer>.btns{
        margin-top:0.4rem;
        font-size:0.15rem;
        text-align: center;
    }

    .btns>a{
        color:#42bd56;
        margin-right: 0.15rem;
    }
    
</style>