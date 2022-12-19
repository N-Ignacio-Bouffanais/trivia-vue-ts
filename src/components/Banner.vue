<script lang="ts" setup>
import { useCategoryStore } from '../stores/category';
const categoryStore = useCategoryStore();

const props = defineProps<{
    user:string,
    points: number,
    min: number,
    sec: number,
}>();
</script>
<template>
    <div class="banner">
        <p>Usuario: {{ props.user }}</p>
        <p>Categoria: {{categoryStore.result}}</p>
        <p>Puntaje Obtenido: {{ props.points }} / 15</p>
        <p>Tiempo: {{ props.min}}:{{ props.sec }}</p>
    </div>
</template>
<style lang="scss">
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

</style>