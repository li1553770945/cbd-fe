<template>
    <div class="menu">
        <div v-for="item in menuItems" :key="item.name" :class="['menu-item', { 'is-active': isActive(item).value }]">
            <router-link :to="item.path" class="menu-link">
                <span>{{ item.name }}</span>
                <div v-if="item.children && item.children.length" class="icon-container">
                    <el-icon>
                        <img class="down-arrow" :src="DownArrow" />
                    </el-icon>
                </div>
            </router-link>
            <!-- 子菜单项 -->
            <div v-if="item.children && item.children.length" class="submenu">
                <div v-for="subItem in item.children" :key="subItem.name" class="menu-item">
                    <router-link :to="subItem.path">{{ subItem.name }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DownArrow from '@/assets/icons/DownArrow.svg';

interface MenuItem {
    path: string;
    name: string;
    children?: MenuItem[];
}

const menuItems: MenuItem[] = [
    { path: 'home', name: 'Home' },
    {
        path: '', name: 'Submission', children: [
            { path: 'call-for-papers', name: 'Call for Papers' },
            { path: 'camera-ready-submit', name: 'Camera Ready Submit' }
        ]
    },
    {
        path: 'committees',
        name: 'Committees',
    },
    {
        'name': 'Program',
        'path': '',
        children: [
            {
                'name': 'Keynotes',
                'path': 'keynotes'
            },
            {
                'name': 'Program at a Glance',
                'path': 'program-at-a-glance'
            },
        ]
    },
    {
        path: 'register',
        name: 'Register',
    },
    {
        name:'Useful Information',
        path:'',
        children:[
            {
                name:'Venue & Hotel',
                path:'venue-hotel'
            },
            {
                name:'Visa',
                path:'visa'
            }
        ]
    },
];

const route = useRoute();
const isActive = (item: MenuItem) => computed(
    () => {
        if (item.children && item.children.length > 0) {
            return item.children.some(child => route.path.includes(child.path));
        }
        return route.path.includes(item.path);
    }
);
</script>

<style scoped>
.menu {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-grow: 1;
    text-align: center;
    padding: 10px 0;
    border: 1px solid #ffffff;
    background: linear-gradient(white, #65C4FF);
    color: #000000;
}

.menu-item.is-active {
    background: #005f98;
}

.menu-item.is-active > a {
    color: #ffffff;
}

.submenu {
    display: none;
    position: absolute;
    width: 100%;
    left: 0;
    top: 100%;
    background-color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.submenu .menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.menu-item:hover .submenu {
    display: flex;
    flex-direction: column;
}

a {
    color: #000000;
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

a:hover {
    color: #000000;
}

.icon-container {
    display: flex;
    align-items: center;
    margin-left: 5px;
}

.down-arrow {
    height: 1em;
}
</style>
