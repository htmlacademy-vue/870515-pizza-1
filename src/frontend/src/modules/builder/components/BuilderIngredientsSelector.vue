<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>

          <radio-button
            v-for="sauceItem in sauces"
            :value="sauceItem.code"
            :label="sauceItem.name"
            :key="sauceItem.id"
            :value-model="sauce ? sauce.code : null"
            @input="$emit('update:sauce', sauceItem)"
            class="ingredients__input"
            name="sauce"
          />
        </div>

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              v-for="ingredient in filling"
              :key="ingredient.id"
              class="ingredients__item"
            >
              <span :class="`filling filling--${ingredient.code}`">
                {{ ingredient.name }}
              </span>

              <item-counter
                :value="calcIngredientsCount(ingredient)"
                @remove="onRemove(ingredient)"
                @add="onAdd(ingredient)"
                class="ingredients__counter"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCounter from "@/modules/ui/components/ItemCounter";
import RadioButton from "@/modules/ui/components/RadioButton";
export default {
  name: "BuilderIngredientsSelector",
  components: { RadioButton, ItemCounter },
  props: {
    sauce: {
      type: Object,
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
    sauces: {
      type: Array,
      required: true,
    },
    filling: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    ingredientsBag: [],
  }),
  watch: {
    ingredients: {
      handler(ingredients) {
        this.ingredientsBag = ingredients;
      },
      immediate: true,
    },
  },
  methods: {
    calcIngredientsCount(ingredient) {
      return this.ingredientsBag.filter(({ id }) => id === ingredient.id)
        .length;
    },
    onAdd(ingredient) {
      this.ingredientsBag.push(ingredient);
      this.$emit("update:ingredients", this.ingredientsBag);
    },
    onRemove(ingredientToRemove) {
      const index = this.ingredientsBag.findIndex(
        (ingredient) => ingredientToRemove.id === ingredient.id
      );

      if (index === -1) {
        return;
      }

      this.ingredientsBag.splice(index, 1);
      this.$emit("update:ingredients", this.ingredientsBag);
    },
  },
};
</script>
