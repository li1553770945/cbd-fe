<template>
    <el-menu default-active="home" class="menu" mode="horizontal" :router="true" :ellipsis="false">
        <el-menu-item index="home" >Home</el-menu-item>
        <el-menu-item index="call-for-papers" >Calls</el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.menu {
    width: 100%; /* 指定菜单宽度为100% */
}

.el-menu-item{
    width:50%;
    padding:0;
}
</style>