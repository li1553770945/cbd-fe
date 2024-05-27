<template>
    <el-row class="head">
        <el-col :span="6">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
        <el-col :span="12" class="title">
            The 19th International Conference on Mobility, Sensing and Networking (MSN 2023)
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
    </el-row>
    <el-row class="menu-row">
        <Menu class="menu"></Menu>
    </el-row>
</template>

<script setup>
import Menu from './Menu.vue';
</script>

<style scoped>
.title {
    font-family: Raleway;
    font-weight: 700;
    font-size: 1.5em;
    padding-top: 1em;
    text-align: left;
}
.menu{
    width:100%;
}
</style>