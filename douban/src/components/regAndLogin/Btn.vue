<template>
    <div>
        <button id="btn" @click="fun(i)">{{btntext}}</button>
    </div>
</template>

<script>
export default {
    props:{
        btntext:{
            type:String,
            required:true
        },

        emailtxt:{
            type:String,
            required:true
        },

        pwdtxt:{
            type:String,
            required:true
        },

        unametxt:{
            type:String,
            required:false
        },
        i:{
            type:String,
            required:true
        }
    },
    methods: {
        fun(i){
            // console.log(this.emailtxt+"----"+this.pwdtxt+"---"+this.unametxt);
            var email=this.emailtxt;
            var pwd=this.pwdtxt;
            var uname=this.unametxt;
            if(i=="1"){
                this.axios({
                    method:"get",
                    url:"http://localhost:3000/get",
                    params:{
                        "email":email,
                        "pwd":pwd,
                        "uname":uname
                    }
                }).then((ok)=>{
                    console.log(ok);
                    window.location.href="/#/login"
                })
            }    
            
            if(i=="0"){
                var param=new URLSearchParams();
                param.append("email",email);
                param.append("pwd",pwd);
                this.axios({
                    method:"post",
                    url:"http://localhost:3000/post",
                    data:param
                }).then((ok)=>{
                    console.log(ok);
                    window.location.href="/#/home"
                })
            }
        }
    }
}
</script>

<style scoped>
    button{
        width:100%;
        height:0.42rem;
        margin-top:0.1rem;
        background-color: #17aa52;
        border: none;
        color:#fff;
    }
</style>