import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 1,
    points: 0,
    alt_correct : false,
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
    incrementPoint(value: number){
      this.points+= value
    },
    decrementPoint(value: number){
      this.points -= value;
    }
  },
});
