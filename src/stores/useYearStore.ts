// stores/useYearStore.ts
import { defineStore } from 'pinia';

export const useYearStore = defineStore('yearStore', {
  state: () => ({
    currentYear: null as number | null
  }),
  actions: {
    setCurrentYear(year: number) {
      this.currentYear = year;
    }
  }
});
