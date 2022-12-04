<script lang="ts">
export default {
  data() {
    return {
      picked: 'One'
    }
  }
}
</script>
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
    <!-- <p>
      <span
        >A) <input type="radio" id="one" v-model="picked" /> </span
      >{{ answer }}
    </p> -->
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>

    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">{{alt_one}}</label>
    <input type="radio" id="three" value="Three" v-model="picked" />
    <label for="three">{{answer}}</label>

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
  input {
    height: 2.2rem;
    width: 2.2rem;
    border-radius: 50%;
  }
}
</style>