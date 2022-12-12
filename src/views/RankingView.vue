<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
const Title = defineAsyncComponent(() => import('../components/Title.vue'));

let title = "Ranking"
</script>
<template>
    <Title :title="title"/>
</template>
<style lang="scss">
</style>