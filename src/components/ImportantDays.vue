<template>
    <div class="important-days">
        <ul>
        <li v-for="day in importantDays" :key="day.date">
            <span>{{ day.date }}</span>
            <span>{{ day.name }}</span>
        </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useYearStore } from '../stores/useYearStore';
const yearStore = useYearStore();
interface IImportantDay {
    date: string;
    name: string;
}
const importantDays = ref<IImportantDay[]>([]);
watchEffect(async () => {
    if (yearStore.currentYear) {
        try {
            const data = await import(`../assets/${yearStore.currentYear}/data/important-days.json`);
            importantDays.value = data.default as IImportantDay[];
        } catch (error) {
            console.error('Failed to load important days data:', error);
        }
    }
});
</script>
<style scoped>

</style>