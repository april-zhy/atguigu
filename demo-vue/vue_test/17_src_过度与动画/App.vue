<!--
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-09 19:03:09
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-15 14:35:21
-->
<template>
  <div>
    <Test />
    <Test2 />
    <Test3 />
  </div>
</template>

<script>
import Test from "./components/Test";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";

export default {
  name: "App",
  components: { Test, Test2, Test3 },
};
</script>
