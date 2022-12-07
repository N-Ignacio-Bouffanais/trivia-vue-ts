<script lang="ts" setup>
import { ref } from 'vue';

let minutes = ref(0)
let seconds = ref(0);

// setInterval(()=> {
//     const currDate = new Date();
//     const launchTime = launchDate - currDate;

//     seconds.value = parseInt( launchTime / 1000 );

// })

</script>
<template>
    <div class="Timer_container">
        <div class="minutos">
            <p class="displays">{{ minutes }}</p>
            <p>minutos</p>
        </div>
        <span>:</span>
        <div class="segundos">
            <p class="displays">{{ seconds }}</p>
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
    span{
        font-size: 5rem;
    }
    .displays {
        font-size: 6rem;
        text-align: center;
    }
}
</style>