<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useCounterStore } from "../stores/counter";
import { useCategoryStore } from "../stores/category";
import { db } from "../main";
import { doc, setDoc } from "firebase/firestore"

const counterStore = useCounterStore();
const categoryStore = useCategoryStore();
const router = useRouter();

const Finish = async () => {
    router.push('/ranking')
    counterStore.stop = true;
    await setDoc(doc(db, "ranking", `${counterStore.user_n}`), {
        usuario: counterStore.user_n,
        categoria: categoryStore.result,
        puntaje: counterStore.points,
        minutos: counterStore.min_r, 
        segundos: counterStore.sec_r,
    });
}
const ResetPicked = () =>{
    counterStore.alt_picked = '';
}

</script>
<template>
    <div class="arrows">
        <button v-show="counterStore.counter < 15 && counterStore.alt_picked != '' " class="btn short next" @click="
            () => {
                if (counterStore.counter <= 15) {
                    counterStore.incrementBy(1);
                    if (counterStore.alt_correct === true) {
                        counterStore.incrementPoint(1);
                    }
                }
                ResetPicked()
            }
        ">
            ►
        </button>
        <button v-show="counterStore.counter == 15" class="btn finalizar" @click="() => {
            if (counterStore.counter == 15) {
                if (counterStore.alt_correct === true) {
                    counterStore.incrementPoint(1);
                }
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
    }

    .back {
        background-color: #e91e63;
    }

    .next {
        background-color: #00e676;
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