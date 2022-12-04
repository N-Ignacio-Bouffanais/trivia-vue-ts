<script lang="ts">
export default {
  data() {
    return {
      picked: "",
    };
  },
};
</script>
<script lang="ts" setup>
import anime_questions from "../questions/anime";
import history_questions from "../questions/history";

import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();

const props = defineProps<{
  category: string;
}>();
console.log(props.category);
let option = anime_questions

// let option: { id: number; question: string; answer: string; alt_one: string; alt_two: string; alt_three: string; alt_four: string; }[]
// const Category = () => {
//   if (props.category == 'history') {
//   option = history_questions;
// }
// else if(props.category == 'anime'){
//   option = anime_questions
// }
// else{
//   console.log(option)
// }
//   return option
// }
// Category()

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
    } in option.slice(counterStore.counter - 1, counterStore.counter)"
    :key="id"
  >
    <p>
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">{{ alt_two }}</label>
    </p>
    <p>
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">{{ alt_one }}</label>
    </p>
    <p>
      <input type="radio" id="three" value="Three" v-model="picked" />
      <label for="three">{{ alt_four }}</label>
    </p>
    <p>
      <input type="radio" id="four" value="four" v-model="picked" />
      <label for="four">{{ answer }}</label>
    </p>
    <p>
      <input type="radio" id="five" value="five" v-model="picked" />
      <label for="five">{{ alt_three }}</label>
    </p>
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
    margin-right: 0.5rem;
  }

  label {
    font-size: 2.2rem;
  }
}
</style>