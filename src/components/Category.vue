<script lang="ts" setup>

</script>

<template>
  <div class="category">
    <button class="history">HISTORIA</button>
    <button class="math">MATEMATICAS</button>
    <button class="videogames">VIDEOJUEGOS</button>
    <button class="anime">ANIME</button>
    <button class="music">MUSICA</button>
  </div>
</template>
<style scoped lang="scss">
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
        background-color: #1fc4da;
    }
  }
  .music {
    background-color: #9c27b0;
    &:hover{
        background-color: #b739ce;
    }
  }
}
</style>
