<script lang="ts" setup>
import { defineAsyncComponent, ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { useCounterStore } from "../stores/counter";
import { db }  from "../main"
import { collection, getDocs } from "firebase/firestore";

const counterStore = useCounterStore();
const router = useRouter();
const Banner = defineAsyncComponent(() => import('../components/Banner.vue'))
const Button = defineAsyncComponent(() => import('../components/Button.vue'))

const Play = () => {
    router.push('/game')
}
const ResetPoints = () =>{
    counterStore.points = 0
}

onMounted( async()=>{
    const querySnapshot = await getDocs(collection(db, "ranking"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
})

</script>
<template>
    <div class="container">
        <h1>Ranking</h1>
        <Banner class="green" :user="counterStore.user_n" :points="counterStore.points" :min="counterStore.min_r" :sec="counterStore.sec_r"/>
        <div class="another-try">
            <Button @click="() => { Play(); ResetPoints() }" :text="'Otra vez!'" :width="'12'" :bg="'#ea1b64'"
                style="margin: 2rem;" />
        </div>
    </div>
</template>
<style lang="scss">
.container{
    margin: 0 6vw;
    h1{
        margin: 2.4rem auto;
        font-size: 3.6rem;
        color: #00c4ff;
        text-align: center;
    }
    .another-try{
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