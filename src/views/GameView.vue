<script lang="ts" setup>
import { ref, unref } from "vue";
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();

let selected = ref(false);
let category_sel = ref(true);

const showquestion = () => {
  return (selected.value = true), (category_sel.value = false);
};
const hidequestion = () => {
  return (selected.value = false), (category_sel.value = true);
};
</script>
<template>
  <div class="game-container">
    <div v-show="unref(selected) === true" class="question container">
      <div class="list-title">
        <h1>Pregunta numero: {{ counterStore.counter }}</h1>
        <button class="btn largue" @click="()=> {
          hidequestion(),
          counterStore.reset()
        }">
          Elegir otra categoria
        </button>
      </div>
      <div class="arrows">
        <button class="btn short" @click="
          () => {
            if (counterStore.counter > 1) {
              counterStore.decrementBy(1);
            }
          }
        ">
          ◄ anterior
        </button>
        <button class="btn short" @click="
          () => {
            if (counterStore.counter < 8) {
              counterStore.incrementBy(1);
            }
          }
        ">
          siguiente ►
        </button>
      </div>
    </div>
    <div v-show="unref(category_sel) === true" class="category container">
      <button @click="showquestion" class="btn history">HISTORIA</button>
      <button @click="showquestion" class="btn math">MATEMATICAS</button>
      <button @click="showquestion" class="btn videogames">VIDEOJUEGOS</button>
      <button @click="showquestion" class="btn anime">ANIME</button>
      <button @click="showquestion" class="btn music">MUSICA</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.game-container {
  padding: 0 8vw;

  .container {
    margin: 7rem auto;
    justify-items: center;
    display: grid;
  }

  .btn {
    border: none;
    cursor: pointer;
  }

  .question {
    h1 {
      font-size: 3.4rem;
      color: white;
      margin-right: 1rem;
    }

    .list-title {
      display: flex;
      align-items: center;
      width: 80vw;
      justify-content: space-between;

      .largue {
        background-color: #ff9800;
        border-radius: 0.8rem;
        height: 7rem;
      }
    }

    .arrows {
      display: flex;
      width: 80vw;
    }

    .short {
      margin-top: 1rem;
      margin-right: 1rem;
    }

    .btn {
      color: white;
      background-color: #1e1e1e;
      font-size: 2rem;
    }
  }

  .category {
    grid-auto-rows: 7rem;
    grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
    gap: 1rem;

    button {
      width: 24rem;
      height: 5.2rem;
      font-size: 1.6rem;
      border-radius: 0.7rem;
      color: white;
      font-weight: 500;
      letter-spacing: 0.1rem;
    }

    .history {
      background-color: #e91e63;

      &:hover {
        background-color: #e0366f;
      }
    }

    .math {
      background-color: #1867c0;

      &:hover {
        background-color: #2779d6;
      }
    }

    .videogames {
      background-color: #009688;

      &:hover {
        background-color: #1dac9d;
      }
    }

    .anime {
      background-color: #00bcd4;

      &:hover {
        background-color: #2ccbe0;
      }
    }

    .music {
      background-color: #9c27b0;

      &:hover {
        background-color: #b739ce;
      }
    }
  }
}
</style>
