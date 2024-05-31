<template>
    <div class="committee-container">
        <h2>Committees</h2>
        <el-table :data="CommiteeData" border style="width: 100%">
            <el-table-column prop="name" label="Name" width="180" class="column-header">
            </el-table-column>
            <el-table-column label="Members" class="column-header">
                <template #default="{ row }">
                    <div v-for="person in row.persons" :key="person.name" class="member-entry">
                        {{ person.name }},
                        {{ person.affiliation }},
                        {{ person.country }}
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { ElTable, ElTableColumn } from 'element-plus';
import { useYearStore } from '../stores/useYearStore';

const yearStore = useYearStore();

interface IPerson {
    name: string;
    affiliation: string;
    country: string;
}

interface ICommittee {
    name: string;
    persons: IPerson[];
}

const CommiteeData = ref<ICommittee[]>([]);

watchEffect(async () => {
    if (yearStore.currentYear) {
        try {
            const data = await import(`../assets/${yearStore.currentYear}/data/committees.json`);
            CommiteeData.value = data.default as ICommittee[];
        } catch (error) {
            console.error('Failed to load committees.json:', error);
        }
    }
});
</script>

<style scoped>
.committee-container {
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
    color: #005f98;
    margin-bottom: 20px;
}

.column-header {
    background-color: #e1f5fe;
    color: #005f98;
    font-weight: bold;
    border-right: 4px solid #005f98;

}

.member-entry {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.member-entry div {
    margin: 4px 0;
}
</style>