<template>
  <div
    :class="
      dough && sauce
        ? `pizza pizza--foundation--${dough.code}-${sauce.code}`
        : ''
    "
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
    },
    size: {
      type: Object,
    },
    sauce: {
      type: Object,
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
};
</script>
