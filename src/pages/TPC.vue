<template>
    <h2>Technical Program Committee</h2>

    <ul>
        <li v-for="person in committeeData" :key="person.name">
            <span>{{ person.name }}</span>
            <span v-if="person.affiliation != ''">, {{ person.affiliation }}, {{ person.country }}</span>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useYearStore } from '../stores/useYearStore';

const yearStore = useYearStore();

interface IPerson {
    name: string;
    affiliation: string;
    country: string;
}


const committeeData = ref<IPerson[]>([]);
watchEffect(async () => {
    if (yearStore.currentYear) {
        try {
            const data = await import(`../assets/${yearStore.currentYear}/data/tpc.json`);
            committeeData.value = data.default as IPerson[];
        } catch (error) {
            console.error('Failed to load committees.json:', error);
        }
    }
});
</script>

<style scoped>
h2 {
    color: #005f98;
    margin-bottom: 20px;
}

.comittee-table {
    border: 1px solid #005f98;
    border-radius: 10px;
}
</style>