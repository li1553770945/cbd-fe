<template>
  <el-container class="app-container">
    <el-header class="header-container">

      <Head />
    </el-header>
    <div class="demo-image">
      <el-image class="banner" :src="bannerUrl" v-show="routeName == 'home'" />
    </div>
    <el-container>
      <el-main class="main-container">
        <router-view></router-view>
      </el-main>
      <el-aside class="aside-container">

        <News />

        <ImportantDays />

        <Contact/>
      </el-aside>
    </el-container>
    <el-footer class="footer">
      Copyright &copy; {{ yearStore.currentYear }} International Conference on Advanced Cloud and Big Data
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import Head from './components/Head.vue';
import ImportantDays from './components/ImportantDays.vue';
import Contact from './components/Contact.vue';
import News from './components/News.vue';

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
  height: auto;
  background-color: #f0f0f0;
  padding-left: 30px;

}

.aside-container {
  padding: 10px;
  background-color: #e4e5e6;
  width: 30%;
  text-align: left;
  padding-left: 2%;
  margin-bottom: 1%;
}


.footer {
  display: flex;
  /* Flexbox 布局 */
  text-align: center;
  align-items: center;
  justify-content: center;
  /* 水平居中 */
  background-color: #005f98;
  color: white;
}
</style>
