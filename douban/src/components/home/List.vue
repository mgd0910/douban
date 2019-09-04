<template>
    <div class="list">
        <a href="#">
            <div class="content">
                <img :src="imgsrc">
                <h3>{{title}}</h3>
                <p>{{content}}</p>
            </div>
            <div class="author">
                <span>{{name}}</span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            required:true,
            default:"奇妙的不确定性 Intriguing Uncertainties"
        },
        content:{
            type:String,
            required:true,
            default:"展览“奇妙的不确定性”旨在强调当代艺术中某些特定叙事的重要性"
        },
        imgsrc:{
            type:String,
            required:true,
            default:"../../../static/img/1.jpg"
        },
        name:{
            type:String,
            required:true,
            default:"测试"
        },
    }
}
</script>

<style scoped>
    .list a{
        position: relative;
        display: block;
        padding: 0.25rem 0.18rem 0.25rem 0;
        margin-left: 0.18rem;
        border-bottom:0.01rem solid #ddd;
    }

    .content{
        overflow: hidden;
        margin-bottom: 0.1rem;
    }

    .content img{
        float: right;
        width: 25.6%;
        height: 0.8678rem;
        margin-left: 0.25rem;
    }

    .content h3{
        margin-top: 0;
        margin-bottom: 0.06rem;
        line-height: 1.41;
        text-align: justify;
        font-size: 0.17rem;
        font-weight: 500;
        color: #494949;
    }

    .content p{
        height:0.36rem;
        line-height:1.5;
        text-align: justify;
        color: #aaa;
        font-size: 0.12rem;
        overflow: hidden;
    }

    .author{
        font-size: 0.12rem;
        color: #ccc;
    }
</style>