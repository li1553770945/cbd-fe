<template>
    <component :is="callForPaperComponent" />
  </template>
  
  <script setup lang="ts">
  import { defineAsyncComponent, watchEffect,shallowRef } from 'vue';
  import { useYearStore } from '../stores/useYearStore';
  
  const yearStore = useYearStore();
  const callForPaperComponent = shallowRef(null);
  
  watchEffect(() => {
    if (yearStore.currentYear) {
      callForPaperComponent.value = defineAsyncComponent(() =>
        import(`./${yearStore.currentYear}/Home.vue`)
          .catch(error => {
            console.error('Failed to load call for paper component:', error);
          })
      );
    }
  });
  </script>
  