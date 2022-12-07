<script setup lang="ts">
import Navigation from './components/Navigation.vue';
</script>

<template>
  <Navigation />
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}

body {
  background-color: #1a1a1a;
}
.btn {
  border: none;
  cursor: pointer;
}
.title h1 {
  color: white;
  font-size: 3rem;
  margin: 3.5rem auto;
  width: 100%;
  text-align: center;
}
</style>
