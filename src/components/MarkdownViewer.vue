<template>
    <component :is="DynamicMarkdownComponent"></component>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted, defineProps } from 'vue';
import { useYearStore } from '../stores/useYearStore';

const yearStore = useYearStore();
const props = defineProps<{
    file: string;
}>();
const DynamicMarkdownComponent = ref(null);

onMounted(() => {
    DynamicMarkdownComponent.value = defineAsyncComponent(() =>
        import(`../assets/${yearStore.currentYear}/pages/${props.file}.md`)
    );
});
</script>

<style scoped>
:deep(h1),
:deep(h2) {
    color: #005f98;
    /* 设置默认的蓝色 */
}
</style>