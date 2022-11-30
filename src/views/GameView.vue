<script lang="ts" setup>
import Category  from "../components/Category.vue";

import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();
</script>
<template>
  <div class="game-container">
    {{ counterStore.counter }}
    <Category />
  </div>
</template>
<style scoped lang="scss">
.game-container {
  padding: 0 8vw;
}
</style>
