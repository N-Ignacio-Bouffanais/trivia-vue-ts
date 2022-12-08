<script lang="ts" setup>
import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore();

</script>
<template>
    <div class="arrows">
        <button class="btn short back" @click="
            () => {
                if (counterStore.counter > 1) {
                    counterStore.decrementBy(1);
                    counterStore.reset_pick();
                }
            }
        ">
            ◀
        </button>
        <button class="btn short next" @click="
    () => {
        if (counterStore.counter < 10) {
            counterStore.incrementBy(1);
            counterStore.reset_pick();
        }
    }
        ">
            ►
        </button>
    </div>
</template>
<style lang="scss">
.arrows {
    display: flex;
    width: 100%;
    height: 4rem;
    margin: 0.5rem 0;
    justify-content: flex-end;

    .short {
        margin-right: 2rem;
        border-radius: 50%;
        width: 4.5rem;
        height: 4.5rem;
        font-size: 2.2rem;
    }

    .back {
        background-color: #e91e63;
        padding-right: 0.2rem;
    }

    .next {
        background-color: #00e676;
        padding-left: 0.2rem;
    }

    .btn {
        color: white;
        font-size: 1.8rem;
    }
}
</style>