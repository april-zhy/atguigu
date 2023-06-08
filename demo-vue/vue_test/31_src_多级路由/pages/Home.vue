<!--
 * @Description: 
 * @version: 
 * @Author: ZhangHongyu
 * @Date: 2022-08-09 19:03:11
 * @LastEditors: ZhangHongyu
 * @LastEditTime: 2022-08-17 09:56:11
-->
<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news">News</router-link>
        </li>
        <li>
          <router-link to="/home/message">Message</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy() {
    console.log("Home组件即将被销毁了");
  },
  mounted() {
    console.log("Home组件挂载完毕了", this);
    window.homeRoute = this.$route;
    window.homeRouter = this.$router;
  },
};
</script>