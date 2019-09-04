<template>
    <div>
        <h1>欢迎加入豆瓣</h1>
            <div class="meun">
                <input type="text" id="email" name="" placeholder="邮箱" v-model="emailtext">
                <input type="password" name="" id="pwd" placeholder="密码" v-model="pwdtext">
                <input type="text" name="" id="uname" placeholder="用户名" v-model="unametext">
                <btn btntext="立即注册" :emailtxt="emailtext" :i="i" :pwdtxt="pwdtext" :unametxt="unametext"></btn>
            </div>
            <div class="moreLogin">点击「注册」代表你已阅读并同意用户使用协议</div>
            <div class="btns">
                <a href="#">下载豆瓣App</a>
            </div>
    </div>
</template>

<script>
import Btn from '../components/regAndLogin/Btn'
export default {
    components: {
        Btn
    },
    data(){
        return{
            emailtext:'',
            pwdtext:'',
            unametext:'',
            i:'1'
        }
    },
    methods: {
        
    }

}
</script>

<style scoped>
    
    h1{
        margin:10% 0 9%;
        font-size:0.4rem;
        font-weight:300;
        color:#42bd56;
        text-align: center;
    }

    .meun{
        font-size:0.16rem;
        box-sizing: border-box;
        padding:0.2rem 0.15rem;
    } 

    input{
        width:100%;
        height:0.42rem;
        text-indent: 0.2rem;
    }

    .moreLogin{
        font-size:0.15rem;
        text-align: center;
        color:#aaa;
    }

    .btns{
        margin-top:0.4rem;
        font-size:0.15rem;
        text-align: center;
    }

    .btns>a{
        color:#42bd56;
        margin-right: 0.15rem;
    }

</style>