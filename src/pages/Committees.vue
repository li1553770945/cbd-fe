<template>
    <h2>Organization Committee</h2>
    <div v-for="item in oc">
        <h3> {{ item.role }}</h3>
        <ul>
            <li v-for="person in item.persons" :key="person.name">
                <span>{{ person.name }}</span>
                <span v-if="person.affiliation != ''">- {{ person.affiliation }}, {{ person.country }}</span>
            </li>
        </ul>
    </div>
    <h2>Technical Program Committee</h2>
    <div v-for="item in tpc">
        <h3> {{ item.role }}</h3>
        <ul>
            <li v-for="person in item.persons" :key="person.name">
                <span>{{ person.name }}</span>
                <span v-if="person.affiliation != ''">- {{ person.affiliation }}, {{ person.country }}</span>
            </li>
        </ul>
    </div>
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

interface ICommittee {
    role: string;
    persons: IPerson[];
}

const oc = ref<ICommittee[]>([]);
const tpc = ref<ICommittee[]>([]);
watchEffect(async () => {
    if (yearStore.currentYear) {
        try {
            const ocData = await import(`../assets/${yearStore.currentYear}/data/oc.json`);
            oc.value = ocData.default as ICommittee[];

            const tpcData = await import(`../assets/${yearStore.currentYear}/data/tpc.json`);
            tpc.value = tpcData.default as ICommittee[];

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