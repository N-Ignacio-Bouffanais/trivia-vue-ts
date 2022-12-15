<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore();
const router = useRouter();

const Finish = () => {
    router.push('/ranking')
}

</script>
<template>
    <div class="arrows">
        <button v-show="counterStore.counter > 1" class="btn short back" @click="
            () => {
                if (counterStore.counter > 1) {
                    counterStore.decrementBy(1);
                }
            }
        ">
            ◀
        </button>
        <button v-show="counterStore.counter < 10" class="btn short next" @click="
            () => {
                if (counterStore.counter < 10) {
                    counterStore.incrementBy(1);
                    if (counterStore.alt_correct === true) {
                        counterStore.incrementPoint(1);
                    }
                }
            }
        ">
            ►
        </button>
        <button v-show="counterStore.counter == 10" class="btn finalizar" @click="() => {
            if (counterStore.counter == 10) {
                Finish()
            }
        }">Listo</button>
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
    }

    .next {
        background-color: #00e676;
    }

    .btn {
        color: white;
    }

    .finalizar {
        width: 12rem;
        background-color: #00e676;
        border-radius: 0.8rem;
        height: 4.8rem;
        font-size: 2rem;
    }
}
</style>