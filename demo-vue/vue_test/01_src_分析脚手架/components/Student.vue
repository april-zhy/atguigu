<!--
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2021-07-12 11:25:54
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-04 14:26:25
-->
<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
};
</script>
