//buffer 与字符串的转换
// let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// console.log(buf_4.toString()); // utf-8

// let buf1 = Buffer.from("test");
// console.log(buf1.toString()); // utf-8

// // []
// let buf = Buffer.from("abcd");
// console.log(buf);
// console.log(buf[0]);
// console.log(buf[0].toString(2)); // 01101000
// buf[0] = 98;
// console.log(buf.toString()); // 01101000

//溢出
// let buf = Buffer.from("hello");
// buf[1] = 355; // 舍弃高位的数字  0001 0110 1001  => 0110 1001
// console.log("溢出", buf[1].toString());
// console.log("溢出", buf.toString());

// console.error("355".toString(2));

//中文
let buf = Buffer.from("你好");
console.log(buf);
console.log(buf.toString());
