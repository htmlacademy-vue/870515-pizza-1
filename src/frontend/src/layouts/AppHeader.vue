<template>
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
      <router-link to="/cart">{{ totalPrice || 0 }} ₽</router-link>
    </div>
    <div class="header__user">
      <router-link to="/profile">
        <span>Профиль</span>
      </router-link>
      <router-link to="/login" class="header__login">
        <span>Войти</span>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppLayout",
  props: {
    totalPrice: {
      type: Number,
    },
  },
};
</script>
