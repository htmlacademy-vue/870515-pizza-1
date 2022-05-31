<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <router-link to="/" class="logo">
          <img
            src="../assets/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </router-link>
      </div>
      <div class="header__cart">
        <router-link to="/cart">{{ totalPrice }} ₽</router-link>
      </div>
      <div class="header__user">
        <router-link to="/profile" class="header__login">
          <span>Профиль</span>
        </router-link>
        <router-link to="/login" class="header__login">
          <span>Войти</span>
        </router-link>
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
