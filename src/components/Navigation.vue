<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);
let auth;

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
    <div class="avatar robot">
      <font-awesome-icon icon="fa-solid fa-user-astronaut" />
      <p>User</p>
      <p>.B</p>
    </div>
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

  .avatar {
    width: 10rem;
    height: 4rem;
    border-radius: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;

    svg {
      width: 2.8rem;
      height: 2.8rem;
      color: white;
      margin-right: 0.3rem;
    }
    p{
      color: white;
      font-size: 1.4rem;
      cursor: default;
    }

  }

    .robot {
      background-color: #00b0ff;
    }
}
</style>
