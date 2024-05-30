<template>
  <component :is="DynamicMarkdownComponent"></component>
</template>

<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { useYearStore } from '../stores/useYearStore';

const yearStore = useYearStore();
const DynamicMarkdownComponent = ref(null);


onMounted(() => {
    DynamicMarkdownComponent.value = defineAsyncComponent(() =>
        import(`../assets/${yearStore.currentYear}/pages/home.md`)
    );
});
</script>
