<template>
  <div class="navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/game">Game</router-link>
    <router-link to="/ranking">Ranking</router-link>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  background: rgb(17, 17, 17);
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-size: 2.6rem;
    text-decoration: none;
    color: white;
    margin: 0 3rem;
  }
}
</style>
