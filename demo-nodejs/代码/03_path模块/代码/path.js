//导入 fs
const fs = require("fs");
const path = require("path");
//写入文件
fs.writeFileSync(__dirname + "/index.html", "love222");
console.log(__dirname + "/index.html");

//resolve  解决
console.log(path.resolve(__dirname, "./index.html"));
// console.log(path.resolve(__dirname, 'index.html'));
console.log(path.resolve(__dirname, "./index.html", "./test"));

// sep 分隔符
// console.log(path.sep); // windows  \  Linux  /

// parse 方法  __dirname  '全局变量'
console.log("filename", __filename); // 文件的绝对路径
console.log("dirname", __dirname); // 文件的绝对路径
let str = "D:\\Work\\SELF\\NodeJS\\代码\\03_path模块\\代码\\path.js";
let str2 = "C:/nodeJS/13-path/代码//path.js";
console.log(path.parse(str));
console.log("----------------");

// // basename
console.log(path.basename(str));

// dirname
// console.log(path.dirname(str));

// extname
// console.log(path.extname(str));

// console.error(path.resolve("/foo/bar", "./index.ts"));
// console.error(path.resolve("/foo/bar", "/index.ts"));
// console.error(path.resolve("/foo/bar", "index.ts"));
