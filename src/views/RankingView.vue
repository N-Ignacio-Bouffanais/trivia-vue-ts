<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const Banner = defineAsyncComponent(() => import('../components/Banner.vue'))
</script>
<template>
    <div class="container">
        <h1>Ranking</h1>
        <Banner />
    </div>
</template>
<style lang="scss">
.container{
    margin: 0 5vw;
    h1{
        margin: 3rem auto;
        font-size: 3rem;
        color: white;
        text-align: center;
    }
}
</style>