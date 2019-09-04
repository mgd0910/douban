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
// ***15***token******* 引用下载好的token模块
var jwt=require("jsonwebtoken");
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
    var mb5Pwd = crypto.createHash('md5').update(upwd).digest('hex');
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
    // res.send("ok");
})
//把解析模块注入到post的路由当中
app.post("/post", uE, function (req, res) {
    //12.开始接受前台传过来的数据
    var pwd = req.body.pwd;
    var email = req.body.email;
    console.log(email + "===" + pwd);
    //13.开始加密当前密码
    var mb5Pwd = crypto.createHash('md5').update(upwd).digest('hex');
    // var md5Pwd = crypto.createHash('md5').update(upwd).digest('hex');
    //14.查询数据库
    mongoose.connect("mongodb://localhost:27017/mgd", {
        useNewUrlParser: true
    }, function (err) {
        if (err) {
            console.log("数据库连接失败" + err);
        } else {
            console.log("数据库连接成功");
            dbclt.find({
                email:email,
                pwd: mb5Pwd
            }).then(
                (ok) => {
                    // 在查询的时候成功可能有两种结果 第一种查出来值了 第二种没有查出来但是反悔了一个空数组
                    if (ok.length > 0) {
                        // ******16******token  2 创建token 用来保存用户的登录信息
                        // jwt.sign(要保存的数据，私钥（一堆越乱越好的乱码）)
                        var obj = {
                            loginok: true,
                            uname: uname
                        }
                        var miyao = "qwertyuiop1472583690";
                        var token=jwt.sign(obj,miyao);
                        res.send({
                            mes: "登录成功",
                            status: 200,
                            linkid: 2,
                            token
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
app.get("/home", function (req, res) {
    // 解密token
    // jwt.verify(验证的token,加密的密文，回调)
    // 得到前台发送过来的token
    var token = req.query.token;
    var miyao = "qwertyuiop1472583690";
    jwt.verify(token, miyao, function (err, data) {
        console.log(data);
        // 判断loginok是否是true
        if (data.loginok == true) {
            res.send({
                status: 200,
                mes: "用户已经登录",
                linkid: 8,
                uname: data.uname
            })
        } else {
            res.send({
                status: 500,
                mes: "没有登录",
                linkid: 9
            })
        }

    })
})
app.listen(3000);