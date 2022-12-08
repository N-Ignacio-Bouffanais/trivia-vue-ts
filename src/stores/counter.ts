import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 1,
    picked: ''
  }),
  actions: {
    incrementBy(value: number) {
      this.counter += value;
    },
    decrementBy(value: number) {
      this.counter -= value;
    },
    reset(){
      this.counter = 1
    },
    reset_pick(){
      this.picked = ''
    }
  },
});
