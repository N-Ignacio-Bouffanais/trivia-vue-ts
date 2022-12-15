<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter();
const Banner = defineAsyncComponent(() => import('../components/Banner.vue'))
const Button = defineAsyncComponent(() => import('../components/Button.vue'))

const Play = () => {
    router.push('/game')
}
</script>
<template>
    <div class="container">
        <h1>Ranking</h1>
        <Button @click="Play()" :text="'Otra vez!'" :width="'12'" :bg="'#00bcd4'" style="margin: 1rem;"/>
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