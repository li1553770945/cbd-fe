<template>
  <div class="block text-center">
    <div style="position: relative; width: 100%; height: 35vh;">
      <img :src="imageSrc" alt="Carousel image" style="object-fit: cover; width: 100%; height: 100%;">
      <!-- 文字容器 -->
      <div class="title-container">
        <h2 class="title">
          {{ headData?.title }}
        </h2>
        <h3 class="sub-title">
          {{ headData?.subtitle }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useYearStore } from '@/stores/useYearStore';

const yearStore = useYearStore();
const imageSrc = ref<string>();

watchEffect(() => {
  if (yearStore.currentYear) {
    try {

      const imagePath = new URL(`../assets/${yearStore.currentYear}/images/banner.jpg`, import.meta.url).href;
      imageSrc.value = imagePath;

    } catch (error) {
      console.error('Failed to load banner:', error);
    }
  }
});

interface IHead {
  title: string;
  subtitle: string;
}

const headData = ref<IHead | null>(null);

watchEffect(async () => {
  if (yearStore.currentYear) {
    try {
      const data = await import(`@/assets/${yearStore.currentYear}/data/head.json`);
      headData.value = data.default as IHead;
    } catch (error) {
      console.error('Failed to load head data:', error);
    }
  }
});
</script>

<style scoped>
.title-container {
  position: absolute;
  bottom: 50%;
  left: 0;
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); */
  color: white;
  text-align: center;
  /* 文本居中 */
}

.title {
  font-size: 29px;
  /* 大号字体 */
  margin-bottom: 10px;
  /* 添加间距 */
  font-weight: 700;
}

.sub-title {
  font-size: 24px;
  /* 较小字体 */
  /* color: #ccc; */
  /* 浅色文字 */
  font-weight: 500;
}
</style>
