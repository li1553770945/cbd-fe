import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useYearStore } from '@/stores/useYearStore';  // 确保路径正确

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: () => {
            const currentYear = new Date().getFullYear();
            return { path: `/${currentYear}/home` };
        },
    },
    {
      path: '/:year/home',
      name: 'home',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: '/:year/call-for-papers',
      name: 'callForPapers',
      component: () => import('@/pages/CallForPapers.vue'),
    },
    {
      path: '/:year/camera-ready-submit',
      name: 'cameraReadySubmit',
      component: () => import('@/pages/CameraReadySubmit.vue'),
    },
    {
      path: '/:year/committees',
      name: 'committees',
      component: () => import('@/pages/Committees.vue'),
    },
    {
      path: '/:year/keynote1',
      name: 'keynote1',
      component: () => import('@/pages/Keynote1.vue'),
    },
    {
      path: '/:year/keynote2',
      name: 'keynote2',
      component: () => import('@/pages/Keynote2.vue'),
    },
    {
      path: '/:year/register',
      name: 'register',
      component: () => import('@/pages/Register.vue'),
    },
    {
      path: '/:year/venue-hotel',
      name: 'venueHotel',
      component: () => import('@/pages/VenueHotel.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
  ];
  

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const year = to.params.year as string;  // 使用 TypeScript 断言确保类型正确
    if (year && !isNaN(Number(year))) {
        const yearStore = useYearStore();
        yearStore.setCurrentYear(parseInt(year));
    }
    next();
});

export default router;
