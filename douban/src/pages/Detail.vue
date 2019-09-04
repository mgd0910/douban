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
        {{title}}
        <span class="badge">{{loc_name}}</span>
      </h2>
      <div class="poster">
        <img :src="imgsrc" />
      </div>
      <div class="details">
        <span>时间:&nbsp;&nbsp;</span>
        <ul>
          <li>{{begin_time}}</li>
          <li>{{end_time}}</li>
        </ul>
      </div>
      <div class="details">
        <span>地点:&nbsp;&nbsp;</span>
        <ul>
          <li>{{address}}</li>
        </ul>
      </div>
      <div class="details">
        <span>费用:&nbsp;&nbsp;</span>
        <ul>
          <li>{{fee_str}}</li>
        </ul>
      </div>
      <div class="details">
        <span>类型:&nbsp;&nbsp;</span>
        <ul>
          <li>{{subcategory_name}}</li>
        </ul>
      </div>
      <div class="details">
        <span>起始时间:&nbsp;&nbsp;</span>
        <ul>
          <li>{{time_str}}</li>
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
        <div class="content">
          "朋友们！大家期待已久的《神奇动物：格林德沃之罪》终于来啦！魔杖都准备好了吗！
          <br />
          <br />本片依然罗琳阿姨担任编剧，大卫·叶茨执导，“小雀斑”埃迪·雷德梅恩、凯瑟琳·沃特森、约翰尼·德普、埃兹拉·米勒、裘德·洛、艾莉森·苏朵儿、丹·福格勒等人主演，紧接上部《神奇动物在哪里》的剧情，黑巫师格林德沃（德普）再掀风浪，纽特（雀斑）和邓布利多（裘花）联合阻止魔法界的混乱。
          <br />
          <br />想知道年轻时候的邓布利多和格林德沃如何相爱相杀吗？想看中国神兽驺吾、马形水怪、还有人形纳吉尼等神奇动物长什么样子吗？人气超高、机灵古怪调皮捣蛋的“嗅嗅”也有小宝宝啦，麻鸡们速来围观！
          <br />
          <br />该片将定于11月16日中美同步上映，我们将于公映前1天（是最早那批哦！！！）先睹为快！
          <br />
          <br />还等什么？快来进入神奇动物的世界吧~
          <br />
          <br />抢票规则：
          <br />1、在本活动页点击“我要参加”，按规则填写报名表；
          <br />2､ 报名后同步或转发此活动到豆瓣动态；
          <br />3､ 点击想看《神奇动物：格林德沃之罪》：
          <a rel="nofollow" href="https://movie.douban.com/subject/26147417/">https://movie.douban.com/subject/26147417/</a>
          <br />
          <br />我们将从以上按规则报名的网友中（按规则参加可提高中奖概率！），随机抽取幸运豆友，送出电影票1张，并在活动论坛中置顶公布和豆邮、短信通知。
          <br />
          <br />名额：215人
          <br />
          <br />名单公布：11月14日下午
          <br />取票时间：11月15日（周四）18：00~19：00
          <br />观影时间：11月15日（周四）19：10~21：25
          <br />
          <br />观影&amp;取票地点：北京耀莱成龙国际影城(慈云寺店)（北京市朝阳区慈云寺八里庄北里209号未来汇二层）
          <br />观影方法：中奖豆友请于指定的取票时间到观影地点找组织者签到并观影。
          <br />
          <br />活动要求：
          <br />1、观影后24小时内，网友需在《神奇动物：格林德沃之罪》条目（
          <a rel="nofollow" href="https://movie.douban.com/subject/26147417/">https://movie.douban.com/subject/26147417/</a>）发表短评或长评。
          <br />2、中奖用户如不能到场，请至少提前半天通知组织者，无故缺席者将进入黑名单，失去未来三个月观影机会。
          <br />3、中奖电影票不得私下转让或转卖，一经发现，一律取消观影资格。不能参加请短信告知组织者，谢谢。
          <br />
          <br />P.S. 这个人经常组织豆瓣免费观影和观剧活动，可以关注他^_^：
          <a  rel="nofollow" href="https://www.douban.com/people/joearde/">https://www.douban.com/people/joearde/</a>
          <br />
          <br />P.P.S 请添加阿德助理账号淑贞，务必注明“豆瓣北京观影群”！拉你进群，可以随时接收免费观影活动通知哦（24h内应答）
          <br />
          <div class="middle">
            <!-- <img src="https://img3.doubanio.com/view/page_note/large/public/p64154322-1.jpg" alt /> -->
            <br />
            <span class="pic-title"></span>
          </div>"
        </div>
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
  components: {
    HeaderBar,
    Banner,
    DownloadApp
  },
  props:{
      title:{
          type:String,
          required:true,
          default:"魔幻世界再度开启！《神奇动物：格林德沃之罪》超前观影北京专场"
      },
      loc_name:{
        type:String,
        required:true,
        default:"北京"
      },
        imgsrc:{
            type:String,
            required:true,
            default:"../../static/img/2.jpg"
        },
        begin_time:{
            type:String,
            required:true,
            default:"2018-11-15 19:00:00"
        },
        end_time:{
            type:String,
            required:true,
            default:"2018-11-15 21:30:00"
        },
        address:{
            type:String,
            required:true,
            default:"北京 朝阳区 耀莱成龙国际影城慈云寺店（北京市朝阳区东四环中路58号远洋未来汇C座2层）"
        },
        fee_str:{
            type:String,
            required:true,
            default:"免费"
        },
        subcategory_name:{
            type:String,
            required:true,
            default:"主题放映"
        },
        time_str:{
            type:String,
            required:true,
            default:"2018.11.15 周四"
        }
  }
};
</script>

<style scoped>
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