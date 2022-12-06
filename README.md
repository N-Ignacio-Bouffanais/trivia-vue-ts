# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)

## _Ejercicio 2: Trivia_

* 1- Construye una aplicación que cuando ingreses deberá pedir ingresar algunos datos
* 2- Luego de eso podré elegir una categoría de preguntas y a continuación, mostrará de manera aleatoria preguntas que se encuentran en un banco de preguntas con 5 simples respuestas, pero solo una es la correcta
* 3- Debe pedirme responder 20 preguntas, y cuando termine la ultima, debe entregarme un mensaje de felicitaciones y agregarme al ranking de usuarios que han terminado el juego de trivia
* 4- Finalmente debe mostrarme el tiempo que me tomó terminar esta trivia

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
