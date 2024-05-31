<template>
    <h2>Committees</h2>
    <el-table :data="CommiteeData" style="width: 100%" stripe border class="comittee-table" :cell-style="{
        borderColor: '#005f98',
    }" :header-cell-style="{
            borderColor: '#005f98',
        }">
        <el-table-column prop="role" label="Role" width="180">
        </el-table-column>
        <el-table-column label="Members">
            <template #default="{ row }">
                <div v-for="person in row.persons" :key="person.name" class="member-entry">
                    {{ person.name }} <span v-if="person.affiliation != ''">- {{ person.affiliation }}, {{
                        person.country }}</span>
                </div>
            </template>
        </el-table-column>
    </el-table>
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
    role: string;
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
h2 {
    color: #005f98;
    margin-bottom: 20px;
}
.comittee-table{
    border: 1px solid #005f98;
    border-radius: 10px;
}

</style>