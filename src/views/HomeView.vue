<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
const Title = defineAsyncComponent(() => import('../components/Title.vue'));

let title = "Login"
</script>
<template>
    <div class="home-container">
        <Title :title="title"/>
    </div>
</template>
<style lang="scss">
.home-container{
    margin: 0 6vw;
    color: white;
}
</style>