<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);
let auth:any;

onMounted(()=>{
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if(user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  })
})

const handleSubmit = () => {
  signOut(auth).then(()=>{
    router.push("/")
  })
}

</script>
<template>
  <div class="navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/game">Game</router-link>
    <router-link to="/ranking">Ranking</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/signin">Signin</router-link>
    <button @click="handleSubmit" v-if="isLoggedIn">Sing out</button>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  background: rgb(17, 17, 17);
  min-height: 6.5rem;
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  a {
    font-size: 2.2rem;
    text-decoration: none;
    color: white;
    margin: 0.8rem 2vw;
  }
}
</style>
