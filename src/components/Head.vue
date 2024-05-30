<template>
    <el-row class="head">
        <el-col :span="6">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
        <el-col :span="12">
            <el-row class="title">
                {{ headData?.title }}

            </el-row>
            <el-row class="subtitle">
                {{ headData?.subtitle }}
            </el-row>
        </el-col>

        <el-col :span="6">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
    </el-row>
    <el-row class="menu-row">
        <Menu class="menu"></Menu>
    </el-row>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useYearStore } from '../stores/useYearStore';

interface IHead {
    title: string;
    subtitle: string;
}

const headData = ref<IHead | null>(null);
const yearStore = useYearStore();

watchEffect(async () => {
    if (yearStore.currentYear) {
        try {
            const data = await import(`../assets/${yearStore.currentYear}/data/head.json`);
            headData.value = data.default as IHead;
        } catch (error) {
            console.error('Failed to load head data:', error);
        }
    }
});
</script>


<style scoped>
.title {
    font-family: Raleway;
    font-weight: 700;
    font-size: 1.5em;
    padding-top: 1em;
}
.subtitle{
    font-family: Raleway;
    font-weight: 500;
    font-size: 1.1em;

}

.menu {
    width: 100%;
}
</style>