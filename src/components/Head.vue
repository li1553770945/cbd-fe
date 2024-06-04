<template>
    <el-row class="head">
        <!-- <el-col :span="4" class="seulogo-container">
            <el-image :src="seuSrc" fit="scale-down" class="seulogo"></el-image>
        </el-col>
        <el-col :span="5"  class="usqlogo-container">
            <el-image :src="usqSrc" fit="scale-down" class="usqlogo"></el-image>
        </el-col> -->
        <el-col :span="12">
            <el-row class="title">
                {{ headData?.title }}

            </el-row>
            <el-row class="subtitle">
                {{ headData?.subtitle }}
            </el-row>
        </el-col>
        <el-col :span="3">
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

// const seuSrc = new URL('@/assets/images/seu.png', import.meta.url).href;
// const usqSrc = new URL('@/assets/images/usq.svg', import.meta.url).href;


watchEffect(async () => {
    if (yearStore.currentYear) {
        try {
            const data = await import(`@/assets/${yearStore.currentYear}/data/head.json`);
            headData.value = data.default as IHead;
        } catch (error) {
            console.error('Failed to load head data:', error);
        }
    }
});
</script>


<style scoped>
.title {
    font-family: Cabin;
    font-weight: 700;
    font-size: 1.5em;
    padding-top: 1em;
}

.subtitle {
    font-family: Cabin;
    font-weight: 500;
    font-size: 1.1em;

}

.menu {
    width: 100%;
}
.seulogo-container {
   
    display: flex;
    justify-content: center;
    align-items: center;
}
.seulogo{
    width: 50%;
}

.usqlogo-container {
   
   display: flex;
   justify-content: left;
   align-items: center;
}
.usqlogo{
   height:80%;
}
.menu-row{
    margin-top: 20px;
}
</style>