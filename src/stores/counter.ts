import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 1,
    points: 0,
    alt_picked:'',
    alt_correct : false,
    min_r: 0,
    sec_r: 0,
    stop : false,
    user_n: "",
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
    },
  },
});
