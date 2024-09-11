<template>
    <component :is="RegistrationComponent" />
  </template>
  
  <script setup lang="ts">
  import { defineAsyncComponent, watchEffect,shallowRef } from 'vue';
  import { useYearStore } from '../stores/useYearStore';
  
  const yearStore = useYearStore();
  const RegistrationComponent = shallowRef(null);
  
  watchEffect(() => {
    if (yearStore.currentYear) {
      RegistrationComponent.value = defineAsyncComponent(() =>
        import(`./${yearStore.currentYear}/Registration.vue`)
          .catch(error => {
            console.error('Failed to load call for paper component:', error);
          })
      );
    }
  });
  </script>
  