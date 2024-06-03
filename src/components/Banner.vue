<template>
  <div class="block text-center">
    <el-carousel height="30vh" motion-blur>
      <el-carousel-item v-for="src in images" :key="src">
        <img :src="src" alt="Carousel image" style="object-fit: cover; width: 100%; height: 100%;">
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
        console.log('Current Year:', yearStore.currentYear);
        try {
            images.value = [];
            for (let i = 1; i <= 5; i++) {
                const imagePath = new URL(`../assets/${yearStore.currentYear}/images/banner/${i}.jpg`, import.meta.url).href;
                console.log('Image Path:', imagePath);
                images.value.push(imagePath);
            }
        } catch (error) {
            console.error('Failed to load banner:', error);
        }
    }
});

</script>



