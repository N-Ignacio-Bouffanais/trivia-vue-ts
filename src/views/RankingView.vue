<script lang="ts" setup>
import { defineAsyncComponent, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { useCounterStore } from "../stores/counter";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../main";

const counterStore = useCounterStore();
const router = useRouter();
const Banner = defineAsyncComponent(() => import('../components/Banner.vue'))
const Button = defineAsyncComponent(() => import('../components/Button.vue'))

const Play = () => {
    router.push('/game')
}
const ResetPoints = () => {
    counterStore.points = 0
}
let html = ''

onMounted( async ()=>{
    const scoreContainer = document.getElementById("score")
    const q = query(collection(db, "ranking"), orderBy("puntaje", "desc"))

    onSnapshot(q,(querySnapshot)=>{
        querySnapshot.forEach((doc) => {
            const score = doc.data()
            html += `
            <div class="banner">
                <p>Usuario: ${score.usuario}</p>
                <p>Categoria: ${score.categoria}</p>
                <p>Puntaje Obtenido: ${score.puntaje}</p>
                <p>Tiempo: ${score.minutos} : ${score.segundos}seg</p>
            </div>
        `
        });
        scoreContainer.innerHTML = html
    })
})


</script>
<template>
    <div class="container">
        <h1>Ranking</h1>
        <Banner v-show="counterStore.points != 0" class="yellow" :user="counterStore.user_n" :points="counterStore.points" :min="counterStore.min_r"
            :sec="counterStore.sec_r" />
        <div class="green" id="score"></div>
        <div class="another-try">
            <Button @click="() => { Play(); ResetPoints() }" :text="'Otra vez!'" :width="'12'" :bg="'#ea1b64'"
                style="margin: 2rem;" />
        </div>
    </div>
</template>
<style lang="scss">
.container {
    margin: 0 6vw;

    h1 {
        margin: 2.4rem auto;
        font-size: 3.6rem;
        color: #00c4ff;
        text-align: center;
    }

    .banner {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
        grid-auto-rows: 2.5rem;
        column-gap: 1rem;
        justify-items: start;
        align-items: center;
        padding: 0.3rem 2vw 0;
        margin: 1.5rem auto;

        p {
            font-size: 1.6rem;
            font-weight: 500;
            text-align: start;
        }
    }

    .another-try {
        display: flex;
        justify-content: flex-end;
    }
}

$green-color: #00e676;
$green-bg: #1f2d22;
$yellow-color: yellow;
$yellow-bg: #2b2d1f;

.green {
    outline: $green-color solid 0.2rem;
    border-radius: 1rem;
    background-color: $green-bg;

    p {
        color: $green-color;
    }
}

.yellow {
    outline: $yellow-color solid 0.2rem;
    background-color: $yellow-bg;

    p {
        color: $yellow-color;
    }
}
</style>