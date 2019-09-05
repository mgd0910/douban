const Mock=require("mockjs");
// 格式：Mock.mock(设置请求地址,post/get,返回的数据)
Mock.mock("/home","get",require("./json/home.json"));
Mock.mock("/movie","get",require("./json/movie.json"));
Mock.mock("/book","get",require("./json/book.json"));
Mock.mock("/group","get",require("./json/xiaozu.json"));