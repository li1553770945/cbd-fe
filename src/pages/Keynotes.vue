<template>
    <div v-for="(keynote, index) in keynotes" :key="index">
        <h2 class="title">Keynote {{ toRoman(index+1) }}:{{ keynote.title }}</h2>
        <br>
        <div class="image-container">
            <el-image :src="keynote.image" class="keynote-image" />
            <h3 class="author">{{ keynote.author }}</h3>
            <h3 class="afflication">{{ keynote.affiliation }}</h3>
        </div>
        <h3 class="biography-title">Biography</h3>
        <p> {{ keynote.biography }}</p>
    </div>
</template>


<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useYearStore } from '../stores/useYearStore';
const yearStore = useYearStore();


interface IKeynote {
    title: string;
    author: string;
    image: string;
    affiliation: string;
    country: string;
    biography: string;
}

const keynotes = ref<IKeynote[]>([]);

watchEffect(async () => {
    if (yearStore.currentYear) {
        try {
            const data = await import(`../assets/${yearStore.currentYear}/data/keynotes.json`);
            keynotes.value = data.default as IKeynote[];
            keynotes.value = keynotes.value.map(keynote => ({
                ...keynote,
                image: new URL(`../assets/${yearStore.currentYear}/images/${keynote.image}`, import.meta.url).href
            }));

        } catch (error) {
            console.error('Failed to load keynotes.json:', error);
        }
    }
});
interface RomanIndex {
  [key: string]: number;
}

const toRoman = (num: number): string => {
  const roman: RomanIndex = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let result = '';
  for (let key in roman) {
    while (num >= roman[key]) {
      result += key;
      num -= roman[key];
    }
  }
  return result;
}

</script>

<style scoped>
.title {
    color: #005f98;
}
.biography-title{
    color: #3594CF;
}
.image-container {
    text-align: center; /* 使内部的图片居中 */
}

.keynote-image {
    width: 30%;
    display: inline-block; /* 需要是 inline 或 inline-block */
}
</style>