<template>
  <div class="detail">
    <div>
      <header-bar></header-bar>
    </div>
    <div class="detail-view">
      <banner></banner>
    </div>
    <div class="info">
      <h2>
        {{obj.title}}
        <span class="badge">{{obj.loc_name}}</span>
      </h2>
      <div class="poster">
        <img :src="obj.image" />
      </div>
      <div class="details">
        <span>时间:&nbsp;&nbsp;</span>
        <ul>
          <li>{{obj.begin_time}}</li>
          <li>{{obj.end_time}}</li>
        </ul>
      </div>
      <div class="details">
        <span>地点:&nbsp;&nbsp;</span>
        <ul>
          <li>{{obj.address}}</li>
        </ul>
      </div>
      <div class="details">
        <span>费用:&nbsp;&nbsp;</span>
        <ul>
          <li>{{obj.fee_str}}</li>
        </ul>
      </div>
      <div class="details">
        <span>类型:&nbsp;&nbsp;</span>
        <ul>
          <li>{{obj.subcategory_name}}</li>
        </ul>
      </div>
      <div class="details">
        <span>起始时间:&nbsp;&nbsp;</span>
        <ul>
          <li>{{obj.time_str}}</li>
        </ul>
      </div>
      <div class="tags">
        <ul>
          <li>
            <a href="#">艺术展</a>
          </li>
          <li>
            <a href="#">国际</a>
          </li>
          <li>
            <a href="#">艺术</a>
          </li>
          <li>
            <a href="#">当代</a>
          </li>
          <li>
            <a href="#">策展</a>
          </li>
        </ul>
      </div>
      <div class="describe">
        <h2>活动详情</h2>
        <div class="content" v-html="obj.content"></div>
      </div>
    </div>
    <download-app></download-app>
  </div>
</template>

<script>
import HeaderBar from "../components/home/HeaderBar";
import Banner from "../components/Banner";
import DownloadApp from '../components/DownloadApp'
export default {
  data(){
    return {
      obj:[]
    }
  },
  components: {
    HeaderBar,
    Banner,
    DownloadApp
  },
  created() {
    let newId = this.$route.query.id;
        this.axios({
            method:"get",
            url:"/home"
        }).then((data)=>{
            data.data.shouye.filter((v,i)=>{
                if(v.id == newId){
                    this.obj =data.data.shouye[i];
                    console.log(this.obj);
                }
            })
        },(err)=>{
            console.log(err)
        })
    }
  }
</script>

<style scoped>
.detail{
  font-size:0;
}
.loging-box img{
    margin:0 auto;
}

.info {
  margin: 0.1rem;
}
.info h2 {
  margin: 0.2rem 0;
  font-weight: 700;
  color: #494949;
  font-size: 0.168rem;
}
.badge {
  display: inline-block;
  padding: 0.01rem 0.05rem;
  margin-bottom: 0.03rem;
  vertical-align: middle;
  line-height: 0.18rem;
  font-size: 0.12rem;
  color: #fff;
  background-color: #ff8263;
  border-radius: 0.02rem;
}
.poster {
  margin: 0.2rem auto;
  text-align: center;
}

.poster img {
  width: 100%;
  max-width: 2.2rem;
  height: auto;
  margin: 0 auto;
}

.details {
  margin-left: 0.33rem;
  margin-bottom: 0.1rem;
  min-height: 0.15em;
  font-size: 0.14rem;
  clear: left;
}
.details span {
  float: left;
  margin-left: -0.33rem;
  line-height: 1.5;
  color: #666;
}

.details ul {
  list-style: none;
  list-style-position: outside;
  margin-left: 0;
}

.tags ul {
  list-style: none;
}
.tags li {
  display: inline-block;
  margin: 0.1rem 0.1rem 0 0;
  font-size: 0.15rem;
}

.tags a {
  display: block;
  padding: 0 0.12rem;
  line-height: 0.28rem;
  font-size: 0.15rem;
  border-radius: 0.28rem;
  text-align: center;
  color: #494949;
  background: #f5f5f5;
}
.describe h2 {
  color: #072;
}

.content {
  overflow: hidden;
  font-size: 0.14rem;
}



</style>