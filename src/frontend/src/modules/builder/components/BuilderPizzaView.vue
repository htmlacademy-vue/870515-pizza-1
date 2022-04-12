<template>
  <div
    :class="{
      [`pizza pizza--foundation--${dough.code}-${sauce.code}`]: true,
      'pizza__filling--second': hasIngredientsCount(2),
      'pizza__filling--third': hasIngredientsCount(3),
    }"
  >
    <div class="pizza__wrapper">
      <div
        v-for="ingredient in uniqueIngredients"
        :class="`pizza__filling pizza__filling--${ingredient.code}`"
        :key="ingredient.id"
      ></div>
    </div>
  </div>
</template>

<script>
import { uniqBy } from "lodash";

export default {
  name: "BuilderPizzaView",
  props: {
    dough: {
      type: Object,
      required: true,
    },
    sauce: {
      type: Object,
      required: true,
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    uniqueIngredients() {
      return uniqBy(this.ingredients, "id");
    },
  },

  methods: {
    hasIngredientsCount(count) {
      return this.uniqueIngredients.some((uniqueIngredient) => {
        return (
          this.ingredients.filter(
            (ingredient) => ingredient.id === uniqueIngredient.id
          ).length >= count
        );
      });
    },
  },
};
</script>
