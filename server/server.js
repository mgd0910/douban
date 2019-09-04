//启动服务
var express = require("express");
var app = express();
//3.引入加密模块
var crypto = require("crypto");
//5.引入mongoose模块
var mongoose = require("mongoose");
//10.引入post的解析模块body-parser
var bodyParser = require("body-parser");
//11.使用bodyParse下的解析post功能
var uE = bodyParser.urlencoded({
    extended: false
});
//15.引用session模块
var session = require("express-session");
//16.初始化session
app.use(session({
    secret: "mgd12345", //设置密钥，内容可以随便写
    cookie: {
        maxAge: 5 * 1000
    }, //设置cookie的过期时间,80s后session和响应的cookie失效过期
    resave: true, //强制保存 如果session没有被修改也要重新保存
    saveUninitialized: false //如果原先没有session那么就设置 否则不设置
}))
//19引用path模块
// var path=require("path");
//18.设置webserver(静态资源文件)
// 所以要使用path.join(__dirname, "status")来吧文件夹的地址和要读取的文件夹进行拼接用来告诉express
// 从哪里找静态文件
// 注意path是一个工具模块（path是内置模块直接引）
// app.use(express.static(path.join(__dirname, "status")));
// app.use(express.static(path.join(__dirname,"../douban/src/components/regAndLogin")));
//2.解决跨域
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
})
//7.定义集合，不能将集合放到路由内部
var dbclt = mongoose.model("no1", {
    uname: String,
    pwd: String,
    email:String
})
//1.得到前台的数据
app.get("/get", function (req, res) {
    var uname = req.query.uname;
    var pwd = req.query.pwd;
    var email = req.query.email;
    console.log(uname + "---" + pwd + "---" + email);
    
    //4.开始加密数据
    var mb5Pwd = crypto.createHash('md5').update(pwd).digest('hex');
    console.log(mb5Pwd);
    //6.连接数据库
    mongoose.connect("mongodb://localhost:27017/mgd", {
        useNewUrlParser: true
    }, function (err) {
        if (err) {
            console.log("数据库连接失败" + err);
        } else {
            console.log("数据库连接成功");
            //8.设置存入的数据
            var userdemo = new dbclt({
                uname,
                pwd: mb5Pwd,
                email
            })
            //9.开始存储
            userdemo.save().then(
                (ok) => {
                    res.send({
                        mes: "注册成功",
                        status: 200,
                        linkid: 1
                    })
                },
                (err) => {
                    res.send({
                        mes: "注册失败",
                        status: 200,
                        linkid: 1
                    })
                }
            )
        }
    })
})
//把解析模块注入到post的路由当中
app.post("/post", uE, function (req, res) {
    //12.开始接受前台传过来的数据
    // var uname = req.body.uname;
    var pwd = req.body.pwd;
    var email = req.body.email;
    console.log(pwd+ "===" +email);
    //13.开始加密当前密码
    var mb5Pwd = crypto.createHash('md5').update(pwd).digest('hex');
    //14.查询数据库
    mongoose.connect("mongodb://localhost:27017/mgd", {
        useNewUrlParser: true
    }, function (err) {
        if (err) {
            console.log("数据库连接失败" + err);
        } else {
            console.log("数据库连接成功");
            dbclt.find({
                // uname: uname,
                email:email,
                pwd: mb5Pwd
            }).then(
                (ok) => {
                    // 在查询的时候成功可能有两种结果 第一种查出来值了 第二种没有查出来但是反悔了一个空数组
                    if (ok.length > 0) {
                        // ****17****session步骤（3）
                        req.session.loginok=true,
                        // req.session.uname=uname,
                        res.send({
                            mes: "登录成功",
                            status: 200,
                            linkid: 2
                        });
                    } else if (ok.length == 0) {
                        res.send({
                            mes: "登录失败",
                            status: 200,
                            linkid: 3
                        });
                    }
                },
                (err) => {
                    res.send({
                        mes: "连接超时，请稍后再试",
                        status: 500,
                        linkid: 4
                    })
                }
            )
        }
    })
})
app.get("/index",function(req,res){
    console.log(req.session);
    if(req.session.loginok==true){
        res.send({mes:"用户登录过",status:200,linkid:8,username:req.session.uname});
    }else{
        res.send({mes:"用户没有登录过",status:200,linkid:9})
    }
})
app.listen(3000);