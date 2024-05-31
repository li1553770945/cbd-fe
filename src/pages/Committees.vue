<template>
    <h2>Organizers</h2>
    <h2>TPC</h2>
</template>


<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useYearStore } from '../stores/useYearStore';
const yearStore = useYearStore();
interface IOrganizer {
    role: string;
    name: string[];
}

interface ITPC{
    name: string;
    affiliation: string;
    country: string;
}   

interface ICommitee{
    organizers: IOrganizer[];
    tpc: ITPC[];
}
const iCommitee = ref<ICommitee>();

watchEffect(async () => {
    if (yearStore.currentYear) {
        try {
            const data = await import(`../assets/${yearStore.currentYear}/data/committes.json`);
            iCommitee.value = data.default as ICommitee;
        } catch (error) {
            console.error('Failed to load committees.json:', error);
        }
    }
});
</script>
<style scoped>
h2 {
    color: #005f98;
}

.date {
    color: #005f98;
    font-weight: bold;
}
</style>