import { defineStore } from 'pinia'

export const useCounterStore =  defineStore('counter',{
    state: () => ({
        counter: 0,
    }),
    actions:{
        incrementBy( value: number) {
            this.counter += value;
        },
        decrementBy( value: number) {
            this.counter -= value;
        }
    }
})