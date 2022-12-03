<script lang="ts" setup>
import Alternative from "../components/Alternative.vue";
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
        <p>Pregunta numero: {{ counterStore.counter }}</p>
        <button
          class="btn largue"
          @click="
            () => {
              hidequestion(), counterStore.reset();
            }
          "
        >
          Regresar
        </button>
      </div>
      <p>Cual de los planetas del sistema solar es el que tiene mas lunas?</p>
      <div class="alternatives">
        <Alternative />
      </div>
      <div class="arrows">
        <button
          class="btn short back"
          @click="
            () => {
              if (counterStore.counter > 1) {
                counterStore.decrementBy(1);
              }
            }
          "
        >
          ˂
        </button>
        <button
          class="btn short next"
          @click="
            () => {
              if (counterStore.counter < 8) {
                counterStore.incrementBy(1);
              }
            }
          "
        >
          ˃
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
  margin: 0 5vw;
  .container {
    margin: 3rem auto;
    justify-items: center;
    display: grid;
  }

  .btn {
    border: none;
    cursor: pointer;
  }

  .question {
    padding: 1.2rem 2rem;
    width: 100%;
    background-color: #242424;
    border-radius: 1rem;
    p {
      font-size: 2.8rem;
      color: white;
      width: 100%;
    }

    .list-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 6rem;
      width: 100%;
      margin: 0.5rem 0;
      p {
        font-size: 2.4rem;
        color: #ef5350;
      }

      .largue {
        background-color: #00b0ff;
        border-radius: 0.8rem;
        height: 4.8rem;
        width: 12rem;
        margin-right: 1rem;
      }
    }

    .arrows {
      display: flex;
      width: 100%;
      height: 4rem;
      margin: 0.5rem 0;
      justify-content: flex-end;
      .short {
        margin-right: 2rem;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
      }
      .back {
        background-color: #e91e63;
      }
      .next {
        background-color: #00e676;
      }
    }
    .btn {
      color: white;
      font-size: 1.8rem;
    }
    .alternatives {
      width: 100%;
    }
  }

  .category {
    grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
    grid-auto-rows: 6rem;
    gap: 2rem;
    padding: 5rem 0;
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
