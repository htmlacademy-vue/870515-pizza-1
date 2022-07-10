<template>
  <div class="layout">
    <app-header :total-price="totalPrice" />

    <slot />
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
