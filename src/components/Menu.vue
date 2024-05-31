<template>
    <div class="menu">
        <div v-for="item in menuItems" :key="item.name" :class="['menu-item', {'is-active': isActive(item).value}]">
            <router-link :to="item.path">
                {{ item.name }}
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

interface MenuItem {
  path: string;
  name: string;
  children?: MenuItem[];  // 可选的子菜单数组
}

const menuItems: MenuItem[] = [
  { path: 'home', name: 'Home' },
  { path: '', name: 'Papers', children: [
    { path: 'call-for-papers', name: 'Call for Papers' },
    { path: 'camera-ready-submit', name: 'Camera Ready Submit' }
  ]},
  {
    path:'committees',
    name:'Committees',
  },
  {
    'name': 'Program',
    'path': '',
    children:[
        {
            'name': 'Keynote1',
            'path': 'keynote1'
        },
        {
            'name': 'Keynote2',
            'path': 'keynote2'
        },
    ]
  },
  {
    path:'register',
    name:'Register',
  },
  {
    path:'venue-hotel',
    name:'Venue & Hotel',
  },
];

const route = useRoute();
const isActive = (item:MenuItem) => computed(
    () => {
        if(item.children && item.children.length > 0) {
            return item.children.some(child => route.path.includes(child.path));
        }
        return route.path.includes(item.path);
    }
);

</script>

<style scoped>
.menu {
    display: flex; /* 使用 Flexbox 布局 */
    justify-content: space-between; /* 横向平分空间 */
    width: 100%; /* 占满整个容器宽度 */
}

.menu-item {
    display: flex; /* Flexbox 布局 */
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    position: relative; /* 定位子菜单 */
    flex-grow: 1; /* 每个菜单项平分空间 */
    text-align: center; /* 文本居中显示 */
    padding: 10px 0; /* 适当的填充以增加点击区域 */
    border: 1px solid #ffffff; /* 添加一个深色的右边框 */
    background: linear-gradient(white, #65C4FF);
    color:#000000;
}

.menu-item.is-active {
   background:#005f98;

}
.menu-item.is-active > a{
   color:#ffffff;

}
/* .menu-item:hover {
    background-color: #1ba000; /* 鼠标悬停时改变背景颜色 
} */

.submenu {
    display: none; /* 默认不显示子菜单 */
    position: absolute; /* 绝对定位 */
    width: 100%; /* 子菜单宽度与父菜单项一致 */
    left: 0;
    top: 100%; /* 位于菜单项的底部 */
    background-color: white; /* 背景颜色 */
    box-shadow: 0 8px 16px rgba(0,0,0,0.2); /* 阴影效果 */
    z-index: 1000; /* 确保子菜单在其他内容上方 */
}

.submenu .menu-item {
    display: flex; /* Flexbox 布局 */
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    width: 100%; /* 占满整个容器宽度 */
}

.menu-item:hover .submenu {
    display: flex; /* 显示子菜单 */
    flex-direction: column; /* 子项垂直排列 */
}



a {
    color:#005f98;
    text-decoration: none;
    width: 100%;
}

a:hover {
    color:#005f98;
}



</style>