<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();

const router = useRouter();
const isLoggedIn = ref(false);
let auth:any;
let user = ref();

onMounted(()=>{
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if(user) {
      isLoggedIn.value = true;
      console.log(user.displayName);
      user.displayName != null ? counterStore.user_n = user.displayName : counterStore.user_n = ''
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
    <router-link to="/">Inicio</router-link>
    <router-link to="/game">Game</router-link>
    <router-link to="/ranking">Ranking</router-link>
    <router-link to="/register">Registo</router-link>
    <router-link to="/signin">Ingreso</router-link>
    <button @click="handleSubmit" v-if="isLoggedIn">Cerrar Sesion</button>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  background: rgb(17, 17, 17);
  min-height: 6.5rem;
  padding: 0.8rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  a {
    font-size: 2.3rem;
    font-weight: 500;
    text-decoration: none;
    color: #14e1b4;
    margin: 0.5rem 2vw;
  }
  button{
    border: none;
    border-radius: 0.5rem;
    font-size: 2.3rem;
    font-weight: 500;
    color: #14e1b4;
    background-color: rgb(17, 17, 17);
    cursor: pointer;
    margin: 0.5rem 2vw;
  }
}
</style>
