const Mock=require("mockjs");
// 格式：Mock.mock(设置请求地址,post/get,返回的数据)
Mock.mock("/home","get",require("./json/home.json"));