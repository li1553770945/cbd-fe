<template>
  <div class="block text-center">
    <el-carousel height="40vh" motion-blur>
      <el-carousel-item v-for="(src, _) in images" :key="src">
        <div style="position: relative; width: 100%; height: 100%;">
          <img :src="src" alt="Carousel image" style="object-fit: cover; width: 100%; height: 100%;">
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
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useYearStore } from '@/stores/useYearStore';

const yearStore = useYearStore();
const images = ref<string[]>([]);

watchEffect(() => {
  if (yearStore.currentYear) {
    try {
      images.value = [];
      for (let i = 1; i <= 5; i++) {
        const imagePath = new URL(`../assets/${yearStore.currentYear}/images/banner/${i}.jpg`, import.meta.url).href;
        images.value.push(imagePath);
      }
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
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  text-align: center; /* 文本居中 */
}
.title {
  font-size: 28px; /* 大号字体 */
  margin-bottom: 10px; /* 添加间距 */
}
.sub-title {
  font-size: 20px; /* 较小字体 */
  color: #ccc; /* 浅色文字 */
}
</style>
