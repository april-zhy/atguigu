// //1. alloc
// let buf = Buffer.alloc(10);
// console.log(buf, Buffer.from("tt"));

// //2. allocUnsafe
// let buf_2 = Buffer.allocUnsafe(10);
// console.log(buf_2);

//3. from
let buf_3 = Buffer.from("abcd");
console.log(buf_3);
// let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);

let buf_4 = Buffer.from([61, 62, 63, 64]);
let buf_5 = Buffer.from([1, 10, 11, 16, 17, 255, 256]); // <Buffer 01 0a 0b 10 11 ff 00>
console.log(buf_5);
