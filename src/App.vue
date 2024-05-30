<template>
  <el-container class="app-container">
    <el-header class="header-container">

      <Head />
    </el-header>
    <div class="demo-image">
      <el-image class="banner" :src="bannerUrl" v-if="routeName == 'home'" />
    </div>
    <el-container>
      
      <el-main class="main-container">
        <router-view></router-view>
      </el-main>
      <el-aside class="aside-container">
        <h2 class="news">News</h2>
        <h2 class="important-days">Important Days</h2>
      </el-aside>
    </el-container>
    <el-footer class="footer">
      Copyright {{ yearStore.currentYear }}
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import Head from './components/Head.vue';

import { computed } from 'vue';
import { useYearStore } from '@/stores/useYearStore';
const yearStore = useYearStore();
const bannerUrl = computed(() => {
  return new URL(`./assets/${yearStore.currentYear}/images/banner.jpg`, import.meta.url).href;
});


import { useRoute } from 'vue-router';
const route = useRoute();
const routeName = computed(() => route.name);
</script>

<style scoped>
.app-container {
  height: 100%;
  background-color: #f0f0f0;
  max-width: 1800px;
  min-width: 600px;
  min-height: 100vh;
}

.header-container {
  padding: 0;
  height: auto;
  background-color: #ffffff;
}

.main-container {
  padding-left: 5%;
  height: auto;
  background-color: #f0f0f0;
}
.aside-container {
  padding: 10px;
  background-color: #e4e5e6;
  width: 30%;
  text-align: left;
  padding-left: 2%;
  color: #005f98;
  margin-bottom: 1%;
}

.footer{
  display: flex; /* Flexbox 布局 */
  text-align: center;
  align-items: center;
  justify-content: center; /* 水平居中 */
  background-color: #005f98;
  color: white;
}

</style>
