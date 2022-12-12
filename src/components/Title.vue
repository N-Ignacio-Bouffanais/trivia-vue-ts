<script lang="ts" setup>
const props = defineProps<{
    title: string;
}>();
</script>
<template>
    <div>
        <h1>{{ props.title }}</h1>
    </div>
</template>
<style lang="scss">
h1 {
    font-size: 3rem;
    margin: 4rem auto;
    letter-spacing: 0.1rem;
    color: #eb3936;
    width: 28rem;
    text-align: center;
}
</style>