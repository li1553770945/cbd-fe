<template>
    <el-row class="menu">
        <el-col :span="menuItemWidth" v-for="url in urls" :key="url.path" :class="{ 'is-active': isActive(url.path).value }"  class="menu-item">
            <router-link :to="url.path">
                {{ url.name }}
            </router-link>
        </el-col>
    </el-row>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const urls = [
    { 'path': '/home', 'name': 'Home' },
    { 'path': '/call-for-papers', 'name': 'Call for Paper' }
]
const menuItemWidth = 24 / urls.length;

const route = useRoute();
const isActive = (path:string) => computed(
    () => {
        return route.path === path;
    }
);

</script>

<style scoped>
.menu-item {
    background-color: #005f98;
    color: #ffffff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #ffffff; /* 添加一个深色的右边框 */
}

.menu-item:last-child {
    border-right: none; /* 最后一个菜单项不添加右边框 */
}

.is-active {
    background-color: #00b0f0; /* 选中时的背景色为浅蓝色 */
}

.menu {
    margin-top: 1em;
    width: 100%;
    height: 3em;
}

a {
    color: #ffffff;
    text-decoration: none;
    width: 100%;
}

a:hover {
    color: #ffffff;
}



</style>