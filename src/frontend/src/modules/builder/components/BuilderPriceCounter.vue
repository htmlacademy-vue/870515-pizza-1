<template>
  <span>{{ cost }} ₽</span>
</template>

<script>
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
    cost() {
      let cost = 0;

      if (this.dough) {
        cost += this.dough.price;
      }

      if (this.sauce) {
        cost += this.sauce.price;
      }

      this.ingredients.forEach((ingredient) => {
        cost += ingredient.price;
      });

      if (this.size) {
        cost *= this.size.multiplier;
      }

      return cost;
    },
  },
};
</script>

<style scoped></style>
