<template>
  <el-container class="app-container">
    <el-header class="header-container">
      <Head />
    </el-header>
    <el-main class="main-container">
      <router-view></router-view>
    </el-main>
    <el-footer>

    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import Head from './components/Head.vue';
</script>

<style scoped>
.app-container {
  height: 100%;
  background-color: #f0f0f0;
  max-width: 1800px;
  min-width: 1200px;
  height: 100vh;
}
.header-container{
  padding: 0;
  height: auto;
  background-color: #ffffff;
}
</style>
