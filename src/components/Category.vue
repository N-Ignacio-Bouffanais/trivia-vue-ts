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
  margin: 5rem auto;
  display: grid;
  grid-auto-rows: 7rem;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  justify-items: center;
  column-gap: 2rem;
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
        background: #f0407a;
    }
  }
  .math {
    background-color: #1867c0;
    &:hover{
        background: #2f81df;
    }
  }
  .videogames {
    background-color: #009688;
    &:hover{
        background-color: #28bbac;
    }
  }
  .anime {
    background-color: #00bcd4;
  }
  .music {
    background-color: #9c27b0;
  }
}
</style>
