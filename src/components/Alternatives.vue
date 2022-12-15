<script lang="ts">
</script>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();

const props = defineProps<{
  answer: string;
  alt_five: string;
  alt_one: string;
  alt_two: string;
  alt_thee: string;
  alt_four: string;
}>();



let picked = ref("");
let valor = ref("");
let correct = ref(false);

watch(valor, () => {
  if (valor.value == props.answer) {
    // correct.value = true;
    counterStore.alt_correct = true;
    console.log(counterStore.alt_correct)
  } else {
    // correct.value = false;
    counterStore.alt_correct = false;
    console.log(counterStore.alt_correct)
  }
})

</script>
<template>
  <div>
    <p>
      <input @click="() => valor = props.alt_one" type="radio" id="one" value="One" v-model="picked" />
      <label for="one">{{ props.alt_one }}</label>
    </p>
    <p>
      <input @click="() => valor = props.alt_two" type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">{{ props.alt_two }}</label>
    </p>
    <p>
      <input @click="() => valor = props.alt_thee" type="radio" id="three" value="Three" v-model="picked" />
      <label for="three">{{ props.alt_thee }}</label>
    </p>
    <p>
      <input @click="() => valor = props.alt_four" type="radio" id="four" value="four" v-model="picked" />
      <label for="four">{{ props.alt_four }}</label>
    </p>
    <p>
      <input @click="() => valor = props.alt_five" type="radio" id="five" value="five" v-model="picked" />
      <label for="five">{{ props.alt_five }}</label>
    </p>
  </div>
</template>