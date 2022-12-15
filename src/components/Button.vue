<script lang="ts" setup>
const props = defineProps<{
    text: String;
    width: String;
    bg: any;
}>();

</script>
<template>
    <div>
        <button class="btn" :style="{ 'width': width + 'rem', 'background-color': bg}">{{props.text}}</button>
    </div>
</template>
<style lang="scss">
.btn{
    color: white;
    font-size: 2rem;
    border-radius: 0.8rem;
    height: 4.8rem;
    margin: 0 1rem;
}
</style>