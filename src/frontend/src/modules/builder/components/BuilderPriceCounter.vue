<template>
  <span>{{ price }} ₽</span>
</template>

<script>
import { calcPizzaPrice } from "@/common/helpers/pizzaHelper";

export default {
  name: "BuilderPriceCounter",
  props: {
    dough: Object,
    size: Object,
    sauce: Object,
    ingredients: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    price() {
      return calcPizzaPrice({
        dough: this.dough,
        size: this.size,
        sauce: this.sauce,
        ingredients: this.ingredients,
      });
    },
  },
};
</script>

<style scoped></style>
