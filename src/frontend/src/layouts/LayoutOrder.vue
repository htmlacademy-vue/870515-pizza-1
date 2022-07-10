<template>
  <div class="layout">
    <app-header :total-price="totalPrice" />

    <form action="test.html" method="post" class="layout-form">
      <slot />

      <section class="footer">
        <div class="footer__more">
          <router-link to="/" class="button button--border button--arrow">
            Хочу еще одну
          </router-link>
        </div>
        <p class="footer__text">
          Перейти к конструктору<br />чтоб собрать ещё одну пиццу
        </p>

        <div class="footer__price">
          <b>Итого: {{ totalPrice || 0 }} ₽</b>
        </div>

        <div class="footer__submit">
          <button type="submit" class="button">Оформить заказ</button>
        </div>
      </section>
    </form>
  </div>
</template>

<script>
import AppHeader from "@/layouts/AppHeader";

export default {
  name: "LayoutDefault",
  components: { AppHeader },
  props: {
    totalPrice: {
      type: Number,
    },
  },
};
</script>
