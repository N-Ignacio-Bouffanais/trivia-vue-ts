<script lang="ts" setup>
import { ref, onMounted } from 'vue';

let Displayminutes = ref()
let Displayseconds = ref();
let loaded = ref(false)
let lowTime = ref(false)
let midTime = ref(false)
let enoughTime = ref(true)

const seconds = 1000;
const minutes = seconds * 60;
const setTime = 300000;
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
        if (gap < 150000) {
            enoughTime.value = false
            midTime.value = true
        }
        if (gap < 60000) {
            lowTime.value = true
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
            <p :class="[{ lowTime: lowTime }, { midTime: midTime }, { enoughTime: enoughTime }]" class="displays">{{
                    Displayminutes
            }}</p>
        </div>
        <span :class="[{ lowTime: lowTime }, { midTime: midTime }, { enoughTime: enoughTime }]">:</span>
        <div class="segundos">
            <p :class="[{ lowTime: lowTime }, { midTime: midTime }, { enoughTime: enoughTime }]" class="displays">{{
                    Displayseconds
            }}</p>
        </div>
    </div>
</template>
<style lang="scss">
.Timer_container {
    color: white;
    display: flex;
    justify-content: center;

    .enoughTime {
        color: #00e676;
    }

    .midTime {
        color: yellow;
    }

    .lowTime {
        color: red;
    }


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