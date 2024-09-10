<template>
      <h2>Organized By</h2>
    <div class="logo-container">
        <el-image :src="usqSrc" fit="scale-down" class="organizer-logo"></el-image>
        <el-image :src="seuSrc" fit="scale-down" class="organizer-logo"></el-image>
    </div>
    <h2>Sponsored By</h2>
    <div class="logo-container">
        <el-image :src="jcsSrc" fit="scale-down" class="sponsor-logo"></el-image>
        <el-image :src="acmSrc" fit="scale-down" class="sponsor-logo"></el-image>
        <el-image :src="thuSrc" fit="scale-down" class="sponsor-logo"></el-image>

    </div>
</template>

<script setup lang="ts">
const seuSrc = new URL('@/assets/images/seu.png', import.meta.url).href;
const usqSrc = new URL('@/assets/images/usq.svg', import.meta.url).href;
const jcsSrc = new URL('@/assets/images/jcs.png', import.meta.url).href;
const acmSrc = new URL('@/assets/images/acm.png', import.meta.url).href;
const thuSrc = new URL('@/assets/images/thu.png', import.meta.url).href;
</script>
<style scoped>
h2 {
    color: #005f98;
    margin-bottom: 20px;
}
.logo-container {
    display: flex;
    align-items: left; 
    height:6em;
}
.organizer-logo{
    margin-left: 30px;
}
.sponsor-logo{
    margin-left: 30px;
}
</style>