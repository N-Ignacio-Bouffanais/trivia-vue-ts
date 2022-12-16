<script setup lang="ts">
import { ref, unref, defineAsyncComponent } from "vue";
import Alternative from "../components/Alternative.vue";
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();

let selected = ref(false);
let category_sel = ref(true);
let init = ref(false);

const reinitTimer = () => {
  counterStore.counter = 1;
  counterStore.stop = false;
}

const showquestion = () => {
  return (selected.value = true), (category_sel.value = false), (init.value = true);
};
const hidequestion = () => {
  return (selected.value = false), (category_sel.value = true), (init.value = false);
};
let result = ref('')
const Anime = () => {
  return result.value = 'anime'

}
const History = () => {
  return result.value = 'history'
}
const Games = () => {
  return result.value = 'games'
}
const Maths = () => {
  return result.value = 'math'
}
const Music = () => {
  return result.value = 'music'
}

const ArrowsBtn = defineAsyncComponent(() => import("../components/ArrowsBtn.vue"));
const Question = defineAsyncComponent(() => import("../components/Question.vue"));
const Timer = defineAsyncComponent(() => import("../components/Timer.vue"));
const Button = defineAsyncComponent(() => import('../components/Button.vue'));

</script>
<template>
  <div class="game-container">
    <div v-show="unref(selected) === true" class="question container">
      <div class="list-title">
        <p>Pregunta N°: {{ counterStore.counter }}</p>
        <Button :text="'Regresar'" :width="'12'" :bg="'#00b0ff'" class="largue" @click="
          () => {
            hidequestion(), counterStore.reset();
          }
        ">
        </Button>
      </div>
      <Suspense>
        <Question :category="unref(result)" />
      </Suspense>
      <div class="alternatives">
        <Alternative :category="unref(result)" />
      </div>
      <Suspense>
        <ArrowsBtn />
      </Suspense>
    </div>
    <Suspense>
      <Timer :init="unref(init)" v-if="unref(selected) === true" />
    </Suspense>
    <div class="title" v-if="unref(category_sel) === true">
      <h1>Selecciona una categoria</h1>
    </div>
    <div v-if="unref(category_sel) === true" class="category container">
      <button @click="() => { reinitTimer(); showquestion(); Anime(); }" class="btn anime">
        ANIME
      </button>
      <button @click="() => { reinitTimer(); showquestion(); History(); }" class="btn history">
        HISTORIA
      </button>
      <button @click="() => { reinitTimer(); showquestion(); Music(); }" class="btn music">
        MUSICA
      </button>
      <button @click="() => { reinitTimer(); showquestion(); Games(); }" class="btn videogames">
        VIDEOJUEGOS
      </button>
      <button @click="() => { reinitTimer(); showquestion(); Maths(); }" class="btn math">
        MATEMÁTICAS
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.game-container {
  margin: 0 6vw;

  .container {
    margin: 3rem auto;
    justify-items: center;
    display: grid;
  }

  .title {
    h1 {
      font-size: 2.8rem;
      width: 25rem;
      margin: 3.5rem auto;
      color: white;
      text-align: center;
    }
  }

  .question {
    padding: 2rem 5vw;
    width: 100%;
    background-color: #242424;
    border-radius: 1rem;
    outline: #00bcd4 solid 0.3rem;

    .list-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 6rem;
      width: 100%;
      margin: 0.5rem 0;

      p {
        font-size: 2.6rem;
        color: #ea1b64;
        font-weight: 500;
      }

    }

    .alternatives {
      width: 100%;
    }

  }

  .category {
    grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
    grid-auto-rows: 6rem;
    gap: 2rem;
    align-items: center;

    button {
      width: 24rem;
      height: 5.4rem;
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
