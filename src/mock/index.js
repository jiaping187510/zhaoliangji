/*
 * @Author: your name
 * @Date: 2020-01-04 10:03:27
 * @LastEditTime : 2020-01-04 23:49:05
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\zhaoliangji\src\mock\index.js
 */
var Mock = require("mockjs");
Mock.mock("/api/goodslist","get",require("./data/goodslist.json"))
Mock.mock("/api/swiperIndex","get",require("./data/swiperIndex.json"))
Mock.mock("/api/pagelist","get",require("./data/pagelist.json"))
Mock.mock("/api/main","get",require("./data/main.json"))
Mock.mock("/api/sidebar","get",require("./data/sidebar.json"))
Mock.mock("/api/cellphone","get",require("./data/cellphone.json"))