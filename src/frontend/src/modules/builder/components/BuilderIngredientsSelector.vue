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
              <app-drag
                :transfer-data="ingredient"
                :draggable="
                  calcIngredientsCount(ingredient) < MAX_INGREDIENTS_COUNT
                "
              >
                <span :class="`filling filling--${ingredient.code}`">
                  {{ ingredient.name }}
                </span>
              </app-drag>

              <item-counter
                :value="calcIngredientsCount(ingredient)"
                :max="MAX_INGREDIENTS_COUNT"
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
import ItemCounter from "@/common/components/ItemCounter";
import RadioButton from "@/common/components/RadioButton";
import AppDrag from "@/common/components/AppDrag";

const MAX_INGREDIENTS_COUNT = 3;

export default {
  name: "BuilderIngredientsSelector",
  components: { AppDrag, RadioButton, ItemCounter },
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
    MAX_INGREDIENTS_COUNT,
  }),
  methods: {
    calcIngredientsCount(ingredient) {
      return this.ingredients.filter(({ id }) => id === ingredient.id).length;
    },
    onAdd(ingredient) {
      this.$emit("update:ingredients", [...this.ingredients, ingredient]);
    },
    onRemove(ingredientToRemove) {
      const ingredients = [...this.ingredients];

      const index = ingredients.findIndex(
        (ingredient) => ingredientToRemove.id === ingredient.id
      );

      if (index === -1) {
        return;
      }

      ingredients.splice(index, 1);
      this.$emit("update:ingredients", ingredients);
    },
  },
};
</script>
