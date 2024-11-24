<template>
    <component :is="finalProgram" />
  </template>
  
  <script setup lang="ts">
  import { defineAsyncComponent, watchEffect,shallowRef } from 'vue';
  import { useYearStore } from '../stores/useYearStore';
  
  const yearStore = useYearStore();
  const finalProgram = shallowRef(null);
  
  watchEffect(() => {
    if (yearStore.currentYear) {
      finalProgram.value = defineAsyncComponent(() =>
        import(`./${yearStore.currentYear}/FinalProgram.vue`)
          .catch(error => {
            console.error('Failed to load call for paper component:', error);
          })
      );
    }
  });
  </script>
  