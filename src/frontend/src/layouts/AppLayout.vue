<template>
  <component :is="layout" :total-price="totalPrice">
    <slot />
  </component>
</template>

<script>
const defaultLayout = "LayoutDefault";

export default {
  name: "AppLayout",
  props: {
    totalPrice: {
      type: Number,
    },
  },
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;

      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>
