import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useYearStore } from '@/stores/useYearStore';  // 确保路径正确

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: () => {
            return { path: `/2024/home` };
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
      component: () => import('@/pages/DynamicCallForPapers.vue'),
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
      path: '/:year/keynotes',
      name: 'keynotes',
      component: () => import('@/pages/Keynotes.vue'),
    },
    {
      path: '/:year/program-at-a-glance',
      name: 'programAtAGlance',
      component: () => import('@/pages/ProgramAtAGlance.vue'),
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
      path: '/:year/visa',
      name: 'visa',
      component: () => import('@/pages/Visa.vue'),
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

router.beforeEach((to, _, next) => {
    const year = to.params.year as string;  // 使用 TypeScript 断言确保类型正确
    if (year && !isNaN(Number(year))) {
        const yearStore = useYearStore();
        yearStore.setCurrentYear(parseInt(year));
    }
    next();
});

export default router;
