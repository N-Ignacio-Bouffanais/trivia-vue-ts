<script lang="ts" setup>
import { defineAsyncComponent, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { useCounterStore } from "../stores/counter";
import { collection, query, getDocs, onSnapshot, orderBy } from "firebase/firestore";
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

onMounted(async () => {
    const scoreContainer = document.getElementById("score")

    // const q = query(collection(db, "ranking"));
    // const querySnapshot = await getDocs(q);

    onSnapshot(collection(db, "ranking"), (querySnapshot) => {

        querySnapshot.forEach((doc) => {
            const score = doc.data()
            html += `
            <div class="banner">
                <p>Usuario: ${score.usuario}</p>
                <p>Categoria: ${score.categoria}</p>
                <p>Puntaje Obtenido: ${score.puntaje}</p>
                <p>Tiempo: ${score.minutos}: ${score.segundos}</p>
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
        <Banner class="green" :user="counterStore.user_n" :points="counterStore.points" :min="counterStore.min_r"
            :sec="counterStore.sec_r" />
        <div class="" id="score"></div>
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
        grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
        grid-auto-rows: 2.5rem;
        column-gap: 1rem;
        justify-items: start;
        align-items: center;
        border-radius: 1rem;
        padding: 0.5rem 1.8rem 0;
        margin: 2rem auto;

        p {
            font-size: 1.8rem;
            font-weight: 500;
            text-align: start;
        }
    }

    .another-try {
        display: flex;
        justify-content: flex-end;
    }
}

$red-color: #ff0613;
$red-bg: #2d1f25;
$blue-color: cyan;
$blue-bg: #1f232d;
$green-color: #00e676;
$green-bg: #1f2d22;
$orange-color: orangered;
$orange-bg: #2d221f;
$purple-color: rgb(170, 2, 170);
$purple-bg: #251f2d;
$yellow-color: yellow;
$yellow-bg: #2b2d1f;
$dark-blue-color: rgb(2, 78, 219);

.red {
    outline: $red-color solid 0.2rem;
    background-color: $red-bg;

    p {
        color: $red-color;
    }
}

.blue {
    outline: $blue-color solid 0.2rem;
    background-color: $blue-bg;

    p {
        color: $blue-color;
    }
}

.green {
    outline: $green-color solid 0.2rem;
    background-color: $green-bg;

    p {
        color: $green-color;
    }
}

.orange {
    outline: $orange-color solid 0.2rem;
    background-color: $orange-bg;

    p {
        color: $orange-color;
    }
}

.purple {
    outline: $purple-color solid 0.2rem;
    background-color: $purple-bg;

    p {
        color: $purple-color;
    }
}

.yellow {
    outline: $yellow-color solid 0.2rem;
    background-color: $yellow-bg;

    p {
        color: $yellow-color;
    }
}

.dark-blue {
    outline: $dark-blue-color solid 0.2rem;
    background-color: $blue-bg;

    p {
        color: $dark-blue-color;
    }
}
</style>