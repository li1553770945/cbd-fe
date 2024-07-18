<template>
    <div class="important-days">
    <h2>Important Dates</h2>
    <table>
       
        <tr v-for="day in importantDays" :key="day.date">
            <td class="date-td">
                <span class="date" v-if="day['older-date']">
                    <s>{{ day['older-date'] }}</s> <br>
                    <span class="new-date"> ➔{{ day.date }}</span>
                </span>
                <span class="date" v-if="!day['older-date']"> {{ day.date }}</span>
            </td>
            <td class="name-td">{{ day.name }}</td>
        </tr>
    </table>
</div>

</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useYearStore } from '../stores/useYearStore';
const yearStore = useYearStore();
interface IImportantDay {
    date: string;
    name: string;
    'older-date'?: string;
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
h2 {
    color: #005f98;
}
table {
    width: 90%;
    border-collapse: collapse;
}
th, td {
    padding: 8px;
    text-align: left;
}
th {
    background-color: #f2f2f2;
}
.date {
    color: #005f98;
    font-weight: bold;
}
.date-td{
    width: 50%;
}
s {
    color: #005f98;
}
.new-date {
    color: #ff6347; 
}
</style>
