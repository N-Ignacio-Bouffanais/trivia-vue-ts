<script lang="ts">
import { ref } from "vue";
let picked = ref("");

import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();

</script>
<script lang="ts" setup>
const props = defineProps<{
  alt_five: string;
  alt_one: string;
  alt_two: string;
  alt_thee: string;
  alt_four: string;
}>();
</script>
<template>
  <div>
    <p>
      <input type="radio" id="one" value="One" v-model="counterStore.picked" />
      <label for="one">{{ props.alt_two }}</label>
    </p>
    <p>
      <input type="radio" id="two" value="Two" v-model="counterStore.picked" />
      <label for="two">{{ props.alt_one }}</label>
    </p>
    <p>
      <input type="radio" id="three" value="Three" v-model="counterStore.picked" />
      <label for="three">{{ props.alt_four }}</label>
    </p>
    <p>
      <input type="radio" id="four" value="four" v-model="counterStore.picked" />
      <label for="four">{{ props.alt_five }}</label>
    </p>
    <p>
      <input type="radio" id="five" value="five" v-model="counterStore.picked" />
      <label for="five">{{ props.alt_thee }}</label>
    </p>
  </div>
</template>