<script lang="ts" setup>
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();
</script>
<template>
    <div class="banner">
        <p>Usuario:</p>
        <p>Puntaje Obtenido: {{ counterStore.points }}</p>
        <p>Tiempo: </p>
    </div>
</template>
<style lang="scss">
.banner{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-radius: 1rem;
        outline: blueviolet solid 0.5rem;
        background-color: rgb(41, 40, 40);
        padding: 0.8rem 1rem;
        p{
            font-size: 2rem;
            margin: 0.8rem 0 0 1.5rem;
            color: white;
            width: 18rem;
            text-align: start;
        }
    }
</style>