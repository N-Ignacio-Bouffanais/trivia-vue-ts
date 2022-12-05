<script lang="ts" setup>
import { ref, onUpdated, onMounted } from "vue";
import anime_questions from "../questions/anime";
import history_questions from "../questions/history";
import Alternatives from "../components/Alternatives.vue";
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();
let option = anime_questions;


const props = defineProps<{
  category: string;
}>();

// onMounted(() => {
//   console.log(props)
// })
// const init = async () => {
//   console.log(props);
// }
// init()

</script>

<template>
  <div class="alternative-container" v-for="{
    id,
    answer,
    alt_one,
    alt_two,
    alt_four,
    alt_three,
  } in option.slice(counterStore.counter - 1, counterStore.counter)" :key="id">
  <p>h{{props.category}}</p>
    <Alternatives :answer="answer" :alt_one="alt_one" :alt_two="alt_two" :alt_thee="alt_three" :alt_four="alt_four" />
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