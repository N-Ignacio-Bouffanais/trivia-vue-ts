<script lang="ts" setup>
import history_questions from "../questions/history";
import anime_questions from "../questions/anime";
import games_questions from '../questions/games';
import math_questions from "../questions/math";

import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();

const props = defineProps<{
  category: string;
}>();

</script>
<template>
  <div class="question_title">
    <div v-show="props.category == 'anime'" class="alternative-container" v-for="{ id, question } in anime_questions.slice(
      counterStore.counter - 1,
      counterStore.counter
    )" :key="id">
      <p>{{ question }}</p>
    </div>
    <div v-show="props.category == 'history'" class="alternative-container" v-for="{ id, question } in history_questions.slice(
      counterStore.counter - 1,
      counterStore.counter
    )" :key="id">
      <p>{{ question }}</p>
    </div>
    <div v-show="props.category == 'games'" class="alternative-container" v-for="{ id, question } in games_questions.slice(
      counterStore.counter - 1,
      counterStore.counter
    )" :key="id">
      <p>{{ question }}</p>
    </div>
    <div v-show="props.category == 'math'" class="alternative-container" v-for="{ id, question } in math_questions.slice(
          counterStore.counter - 1,
          counterStore.counter
        )" :key="id">
      <p>{{ question }}</p>
    </div>
    <div v-show="props.category == 'music'" class="alternative-container" v-for="{ id, question } in math_questions.slice(
              counterStore.counter - 1,
              counterStore.counter
            )" :key="id">
      <p>{{ question }}</p>
    </div>
  </div>
</template>
<style lang="scss">
.question_title{
  width: 100%;
  p {
      font-size: 2.8rem;
      color: white;
      width: 100%;
    }
}
</style>