# Trivia game

## Technologies that I used

- Vue3 Composition api
- Typescript
- Firebase
- Sass
- VScode extension: Vue - Volar

## Screenshot

![solution](./src/assets/trivia.JPG)

## Steps

- 1 Build an application that when you enter it will ask you to enter some data
- 2 After that I will be able to choose a category of questions and then it will randomly show questions that are in a question bank with 5 simple answers, but only one is correct
- 3 You must ask me to answer 20 questions, and when you finish the last one, you must give me a congratulations message and add me to the ranking of users who have finished the trivia game
- 4 Finally you must show me the time it took me to finish this trivia

## What I learned

```html
<p>
  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">{{ props.alt_two }}</label>
</p>
```

```js
import { ref } from "vue";

let picked = ref("");
const props = defineProps<{
  answer: string;
  alt_one: string;
  alt_two: string;
  alt_thee: string;
  alt_four: string;
}>();
```

## Timer in vue3 setup

```html
<div v-if="loaded" class="Timer_container">
  <div class="minutos">
    <p
      :class="[{ lowTime: lowTime }, { midTime: midTime }, { enoughTime: enoughTime }]"
      class="displays"
    >
      {{ Displayminutes }}
    </p>
  </div>
  <span
    :class="[{ lowTime: lowTime }, { midTime: midTime }, { enoughTime: enoughTime }]"
    >:</span
  >
  <div class="segundos">
    <p
      :class="[{ lowTime: lowTime }, { midTime: midTime }, { enoughTime: enoughTime }]"
      class="displays"
    >
      {{ Displayseconds }}
    </p>
  </div>
</div>
```

```js
import { ref, onMounted } from "vue";

let Displayminutes = ref();
let Displayseconds = ref();
let loaded = ref(false);
let lowTime = ref(false);
let midTime = ref(false);
let enoughTime = ref(true);

const seconds = 1000;
const minutes = seconds * 60;
const setTime = 300000;
const startTime = Date.now();
const futureTime = startTime + setTime;

const Coutdown = () => {
  const timer = setInterval(() => {
    const currentTime = Date.now();
    const gap = futureTime - currentTime;

    if (gap < 0) {
      clearInterval(timer);
      return;
    }
    if (gap < 150000) {
      enoughTime.value = false;
      midTime.value = true;
    }
    if (gap < 60000) {
      lowTime.value = true;
    }
    const mins = Math.floor(gap / minutes);
    const secs = Math.floor((gap % minutes) / seconds);

    Displayminutes.value = mins < 10 ? "0" + mins : mins;
    Displayseconds.value = secs < 10 ? "0" + secs : secs;
    loaded.value = true;
  }, 1000);
};
onMounted(() => {
  Coutdown();
});
```

```scss
.Timer_container {
  color: white;
  display: flex;
  justify-content: center;

  .enoughTime {
    color: #00e676;
  }

  .midTime {
    color: yellow;
  }

  .lowTime {
    color: red;
  }

  p {
    font-size: 1.8rem;
  }

  span {
    font-size: 5rem;
  }

  .displays {
    font-size: 6rem;
    text-align: center;
  }
}
```

## Author

- Website - [Nicolas_Bouffanais](https://nicolas-bouffanais.vercel.app/src/index.html)
- Twitter - [@N_Bouffanais](https://twitter.com/N_Bouffanais)
