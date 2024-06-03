<template>
    <component :is="callForPaperComponent" />
  </template>
  
  <script setup lang="ts">
  import { ref, defineAsyncComponent, watchEffect } from 'vue';
  import { useYearStore } from '../stores/useYearStore';
  
  const yearStore = useYearStore();
  const callForPaperComponent = ref(null);
  
  watchEffect(() => {
    if (yearStore.currentYear) {
      callForPaperComponent.value = defineAsyncComponent(() =>
        import(`./${yearStore.currentYear}/CallForPapers.vue`)
          .catch(error => {
            console.error('Failed to load call for paper component:', error);
          })
      );
    }
  });
  </script>
  