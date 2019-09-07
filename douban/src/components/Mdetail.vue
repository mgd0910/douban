<template>
<div class="hh">
    <div class="mdetail">
        <div class="left">
            <h2>无问西东</h2>
            <div class="pinjia">
                <!-- <score></score> -->
                <span>30000人评价</span>
                <p>dddd</p>
                <p class="people">用app查看影人资料</p>
            </div>
            
        </div>
        <div class="right">
            <img src="../../static/img/movie1.png">
        </div>
    </div>
    <div class="mdetail">
        <div class="want"></div>
        <div class="looked"></div>
    </div>
</div>
    

</template>

<script>
// import Score from '../components/Score'
export default {
    // data(){
    //     return{
    //         value:4
    //     }
    // },
    components: {
        // Score
    }
}
</script>

<style scoped>
    
    .mdetail{
        margin-top:4%;
        width:100%;
        display: flex;
    }

    .mdetail .left{
        flex:1;
        margin-left:1%;
        max-height:2.9rem;
    }
    

    .left h2{
        font-size:0.168rem;
        margin-left:10%;
        font-weight:700;
    }
    .left .pinjia{
        margin-left:10%;
        margin-top:2%;
    }
    .pinjia div{
        float: left;
    }
    .pinjia span{
        margin-left:3%;
        color:#ccc
    }
    .pinjia p{
        font-size:0.14rem;
        line-height: 0.20rem;
    }
    .pinjia .people{
        margin-top:1%;
        color:green;
    }
    .mdetail .right{
        margin-right:1%;
    }
</style>
<style>
    
</style>