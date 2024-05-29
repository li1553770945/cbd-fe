<template>
    <div class="demo-image">
      <el-image class="banner" :src="bannerUrl"/>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useYearStore } from '@/stores/useYearStore';
const yearStore = useYearStore();
const bannerUrl = computed(() => {
  return new URL(`../assets/${yearStore.currentYear}/images/banner.jpg`, import.meta.url).href;
});

</script>

<style scoped>
.banner {
  width: 100%;
}
</style>