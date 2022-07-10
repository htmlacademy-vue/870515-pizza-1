<template>
  <div id="app">
    <app-layout :total-price="totalPrice">
      <router-view @addToCart="addToCard" />
    </app-layout>
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayout";
import { calcPizzaPrice } from "@/common/helpers/pizzaHelper";

export default {
  name: "App",
  components: { AppLayout },
  data: () => ({
    cart: [],
  }),
  computed: {
    totalPrice() {
      return this.cart.reduce((totalPrice, pizza) => {
        return totalPrice + calcPizzaPrice(pizza);
      }, 0);
    },
  },
  methods: {
    addToCard(pizza) {
      this.cart.push(pizza);
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";

#app {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
