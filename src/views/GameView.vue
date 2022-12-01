<script lang="ts" setup>
import { ref, unref, onMounted } from 'vue'
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();

let selected = ref(false)

const showquestion = () => {
  return selected.value = true
}
const hidequestion = () => {
  return selected.value = false
}
// const category = ref(null);
// onMounted(() => {
//   const height = category.value.clientHeight;
// });

</script>
<template>
  <div class="game-container">
    <div v-if="(unref(selected) === true)">
      {{ counterStore.counter }}
      <button>►</button>
      <button>◄</button>
      <button @click="hidequestion" >Elegir otra categoria</button>
    </div>
    <div class="category" id="category">
    <button @click="showquestion" class="history">HISTORIA</button>
    <button @click="showquestion" class="math">MATEMATICAS</button>
    <button @click="showquestion" class="videogames">VIDEOJUEGOS</button>
    <button @click="showquestion" class="anime">ANIME</button>
    <button @click="showquestion" class="music">MUSICA</button>
  </div>
  </div>
</template>
<style scoped lang="scss">
.game-container {
  padding: 0 8vw;
}
.category {
  margin: 7rem auto;
  display: grid;
  grid-auto-rows: 7rem;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  justify-items: center;
  gap: 1rem;
  button {
    border: none;
    width: 24rem;
    height: 5.2rem;
    font-size: 1.6rem;
    border-radius: 0.7rem;
    color: white;
    font-weight: 500;
    letter-spacing: 0.1rem;
    cursor: pointer;
  }
  .history {
    background-color: #e91e63;
    &:hover{
        background-color: #e0366f;
    }
  }
  .math {
    background-color: #1867c0;
    &:hover{
        background-color: #2779d6;
    }
  }
  .videogames {
    background-color: #009688;
    &:hover{
        background-color: #1dac9d;
    }
  }
  .anime {
    background-color: #00bcd4;
    &:hover{
        background-color: #2ccbe0;
    }
  }
  .music {
    background-color:#9c27b0;
    &:hover{
        background-color: #b739ce;
    }
  }
}
</style>
