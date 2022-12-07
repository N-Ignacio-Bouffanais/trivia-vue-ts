<script lang="ts" setup>
import { ref, onMounted } from 'vue';

let Displayminutes = ref()
let Displayseconds = ref();
let loaded = ref(false)

const seconds = 1000;
const minutes = seconds * 60;
const setTime = 600000;
const startTime = Date.now();
const futureTime = startTime + setTime;

const Coutdown = () => {
    const timer = setInterval(() => {
        const currentTime = Date.now();
        const gap = futureTime - currentTime;

        if (gap < 0) {
            clearInterval(timer)
            return;
        }
        const mins = Math.floor(gap / minutes)
        const secs = Math.floor((gap % minutes) / seconds)

        Displayminutes.value = mins < 10 ? "0" + mins : mins
        Displayseconds.value = secs < 10 ? "0" + secs : secs
        loaded.value = true
    }, 1000)
}
onMounted(() => {
    Coutdown()
})

</script>
<template>
    <div v-if="loaded" class="Timer_container">
        <div class="minutos">
            <p class="displays">{{ Displayminutes }}</p>
            <p>minutos</p>
        </div>
        <span>:</span>
        <div class="segundos">
            <p class="displays">{{ Displayseconds }}</p>
            <p>segundos</p>
        </div>
    </div>
</template>
<style lang="scss">
.Timer_container {
    color: white;
    display: flex;
    justify-content: center;

    p {
        font-size: 1.8rem;
    }

    span {
        font-size: 5rem;
    }

    .displays {
        font-size: 6rem;
        text-align: center;
    }
}
</style>