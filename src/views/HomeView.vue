<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
const Play = () => {
    router.push('/register')
}
</script>
<template>
    <div class="home-container">
        <h1>Trivia game</h1>
        <p>- You will can choose between five categories: Videogames, Anime, Music, History and Maths.</p>
        <p>- At the end of the game you will be able to see your results and the global ranking of the game. Good luck!!</p>
        <button @click="Play()">Let's play</button>
    </div>
</template>
<style lang="scss">
.home-container {
    margin: 0 8vw;
    color: white;
    display: flex;
    flex-direction: column;

    h1 {
        text-align: center;
        font-size: 5rem;
        margin: 5rem auto 3rem;
        color: #00c4ff;
    }
    p{
        font-size: 1.8rem;
        letter-spacing: 0.1rem;
        margin: 1.2rem auto;
        text-align: center;
    }
    button{
        border: none;
        background-color: springgreen;
        font-size: 2rem;
        border-radius: 0.8rem;
        width: 22rem;
        height: 4rem;
        margin: 1.5rem auto;
        cursor: pointer;
    }
}
</style>