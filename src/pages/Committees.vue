<template>
    <div v-for="item in committeeData">
        <h2> {{ item.role }}</h2>
        <ul>
            <li v-for="person in item.persons" :key="person.name">
                <span>{{ person.name }}</span>
                <span v-if="person.affiliation != ''">, {{ person.affiliation }}, {{ person.country }}</span>
            </li>
        </ul>
    </div>
    <Logos/>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useYearStore } from '../stores/useYearStore';
import Logos from '@/components/Logos.vue';
const yearStore = useYearStore();

interface IPerson {
    name: string;
    affiliation: string;
    country: string;
}

interface ICommittee {
    role: string;
    persons: IPerson[];
}

const committeeData = ref<ICommittee[]>([]);
watchEffect(async () => {
    if (yearStore.currentYear) {
        try {
            const data = await import(`../assets/${yearStore.currentYear}/data/oc.json`);
            committeeData.value = data.default as ICommittee[];
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