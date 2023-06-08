<!--
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2021-07-12 11:25:56
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-04 15:06:44
-->
<template>
  <div>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
export default {
  name: "App",
  components: { Count },
  mounted() {
    console.log("App", this);
  },
};
</script>
