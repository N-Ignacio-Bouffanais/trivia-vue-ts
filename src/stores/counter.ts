import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 1,
    picked: '',
    points: 0,
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
    },
    incrementPoint(value: number){
      this.points+= value
    },
    decrementPoint(value: number){
      this.points -= value;
    }
  },
});
