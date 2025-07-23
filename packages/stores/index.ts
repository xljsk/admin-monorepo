import { defineStore } from "pinia";

export const demoStore = defineStore("demo", {
  state: () => ({
    count: 7,
  }),
  actions: {
    SET_COUNT() {
      this.count++;
    },
  },
});
