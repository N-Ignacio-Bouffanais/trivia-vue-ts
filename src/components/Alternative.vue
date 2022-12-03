<script lang="ts" setup>
import anime_questions from "../questions/anime";

import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();
</script>

<template>
  <div
    class="alternative-container"
    v-for="{
      id,
      answer,
      alt_one,
      alt_two,
      alt_four,
      alt_three,
    } in anime_questions.slice(counterStore.counter - 1, counterStore.counter)"
    :key="id"
  >
    <p><span>A) <input type="checkbox"/> </span>{{ answer }}</p>
    <p><span>B) <input type="checkbox"/> </span>{{ alt_one }}</p>
    <p><span>C) <input type="checkbox"/> </span>{{ alt_two }}</p>
    <p><span>D) <input type="checkbox"/> </span>{{ alt_three }}</p>
    <p><span>E) <input type="checkbox"/> </span>{{ alt_four }}</p>
  </div>
</template>
<style lang="scss">
.alternative-container {
  width: 100%;
  color: white;
  p {
    font-size: 2.2rem;
    margin: 0.7rem 0;
    width: 100%;
  }
  span {
    font-size: 2.2rem;
    margin-right: 0.5rem;
  }
}
</style>