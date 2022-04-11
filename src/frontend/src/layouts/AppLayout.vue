<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <a href="#" class="logo">
          <img
            src="../assets/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="#">{{ totalPrice }} ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>

    <main class="content">
      <slot :addToCard="addToCard" />
    </main>
  </div>
</template>

<script>
import { calcPizzaPrice } from "@/common/helpers/pizzaHelper";

export default {
  name: "AppLayout",
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

<style scoped></style>
