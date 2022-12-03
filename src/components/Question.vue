<script lang="ts" setup>
import anime_questions from "../questions/anime";

import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();

console.log(counterStore.counter);
</script>
<template>
  <div
    class="alternative-container"
    v-for="{ id, question } in anime_questions.slice(
      counterStore.counter - 1,
      counterStore.counter
    )"
    :key="id"
  >
    <p>{{ question }}</p>
</div>
</template>