<template>
    <h2>Final Program</h2>
    <iframe
      :src="Url"
      width="100%"
      height="600px"
      frameborder="0"
    ></iframe>

</template>

<script setup lang="ts">
import {ref,watchEffect} from 'vue';
import { useYearStore } from '@/stores/useYearStore';
const yearStore = useYearStore();
const Url = ref<string>('');

watchEffect(() => {
    if (yearStore.currentYear) {
        try {
            Url.value = new URL(`../../assets/${yearStore.currentYear}/pages/final-program.pdf`, import.meta.url).href;
        } catch (error) {
            console.error('Failed to final-program pdf:', error);
        }
    }
});
</script>
<style scoped>
h2{
    color: #005f98;
}
</style>