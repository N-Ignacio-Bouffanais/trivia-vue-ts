<script lang="ts" setup>
import history_questions from "../questions/history";
import anime_questions from "../questions/anime";
import games_questions from '../questions/games';
import math_questions from "../questions/math";
import music_questions from "../questions/music";
import Alternatives from "../components/Alternatives.vue";

import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();

const props = defineProps<{
  category: string;
}>();

let pick = counterStore.picked

</script>

<template>
  <div>
    <div v-show="props.category == 'history'" class="alternative-container" v-for="{
      id,
      alt_one,
      alt_two,
      alt_three,
      alt_four,
      alt_five,
      answer,
    } in history_questions.slice(counterStore.counter - 1, counterStore.counter)" :key="id">
      <Alternatives :pick="pick" :alt_five="alt_five" :alt_one="alt_one" :alt_two="alt_two" :alt_thee="alt_three"
        :alt_four="alt_four" />
    </div>
    <div v-show="props.category == 'anime'" class="alternative-container" v-for="{
      id,
      alt_one,
      alt_two,
      alt_three,
      alt_four,
      alt_five,
      answer,
    } in anime_questions.slice(counterStore.counter - 1, counterStore.counter)" :key="id">
      <Alternatives :pick="pick" :alt_five="alt_five" :alt_one="alt_one" :alt_two="alt_two" :alt_thee="alt_three"
        :alt_four="alt_four" />
    </div>
    <div v-show="props.category == 'games'" class="alternative-container" v-for="{
      id,
      alt_one,
      alt_two,
      alt_three,
      alt_four,
      alt_five,
      answer,
    } in games_questions.slice(counterStore.counter - 1, counterStore.counter)" :key="id">
      <Alternatives :pick="pick" :alt_five="alt_five" :alt_one="alt_one" :alt_two="alt_two" :alt_thee="alt_three"
        :alt_four="alt_four" />
    </div>
    <div v-show="props.category == 'math'" class="alternative-container" v-for="{
      id,
      alt_one,
      alt_two,
      alt_three,
      alt_four,
      alt_five,
      answer,
    } in math_questions.slice(counterStore.counter - 1, counterStore.counter)" :key="id">
      <Alternatives :pick="pick" :alt_five="alt_five" :alt_one="alt_one" :alt_two="alt_two" :alt_thee="alt_three"
        :alt_four="alt_four" />
    </div>
    <div v-show="props.category == 'music'" class="alternative-container" v-for="{
      id,
      alt_one,
      alt_two,
      alt_three,
      alt_four,
      alt_five,
      answer,
    } in music_questions.slice(counterStore.counter - 1, counterStore.counter)" :key="id">
      <Alternatives :pick="pick" :alt_five="alt_five" :alt_one="alt_one" :alt_two="alt_two" :alt_thee="alt_three"
        :alt_four="alt_four" />
    </div>
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
    display: flex;
    align-items: center;
  }

  input {
    height: 2.2rem;
    width: 2.2rem;
    border-radius: 50%;
    margin-right: 0.8rem;
  }

  label {
    font-size: 2.2rem;
  }
}
</style>