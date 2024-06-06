<template>
  <el-container class="app-container">
    <el-header class="header-container">

      <Head />
    </el-header>
    <Banner v-show="routeName == 'home'" />
    <el-container>
      <el-main class="main-container">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
      <el-aside class="aside-container">

        <News />

        <ImportantDays />
        
        <Contact/>
      </el-aside>
    </el-container>
    <el-footer class="footer">
      Copyright &copy; {{ yearStore.currentYear }} International Conference on Advanced Cloud and Big Data
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import Head from './components/Head.vue';
import ImportantDays from './components/ImportantDays.vue';
import News from './components/News.vue';
import Contact from './components/Contact.vue';
import Banner from './components/Banner.vue';
import { useYearStore } from '@/stores/useYearStore';
const yearStore = useYearStore();

import { useRoute } from 'vue-router';
const route = useRoute();
const routeName = computed(() => route.name);

onMounted(() => {
console.log(`%c
_____                     _____ _                     
|  __ \\                   / ____| |                    
| |__) |__  __ _  ___ ___| (___ | |__   ___  ___ _ __  
|  ___/ _ \\/ _\` |/ __/ _ \\\\___ \\| '_ \\ / _ \\/ _ \\ '_ \\ 
| |  |  __/ (_| | (_|  __/____) | | | |  __/  __/ |_) |
|_|   \\___|\\__,_|\\___\\___|_____/|_| |_|\\___|\\___| .__/ 
                                                | |    
                                                |_|     `,"font-family:MonoSpace")                                  
                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                       
  console.log('website made by peacesheep,https://peacesheep.xyz');
});
</script>

<style scoped>
.app-container {
  height: 100%;
  background-color: #f0f0f0;
  max-width: 1800px;
  min-width: 600px;
  min-height: 100vh;
}

.header-container {
  padding: 0;
  height: auto;
  background-color: #ffffff;
}

.main-container {
  height: auto;
  background-color: #f0f0f0;
  padding-left: 30px;

}

.aside-container {
  padding: 10px;
  background-color: #e4e5e6;
  width: 30%;
  text-align: left;
  padding-left: 2%;
  margin-bottom: 1%;
}


.footer {
  display: flex;
  /* Flexbox 布局 */
  text-align: center;
  align-items: center;
  justify-content: center;
  /* 水平居中 */
  background-color: #005f98;
  color: white;
}
</style>
