<template>
  <div>
    <router-view />

    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <builder-dough-selector v-model="selectedDough" :dough="dough" />
        <builder-size-selector v-model="selectedSize" :sizes="sizes" />
        <builder-ingredients-selector
          :ingredients.sync="selectedIngredients"
          :sauce.sync="selectedSauce"
          :sauces="sauces"
          :filling="filling"
        />

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              v-model="name"
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>

          <div class="content__constructor">
            <app-drop @drop="selectedIngredients.push($event)">
              <builder-pizza-view
                :dough="selectedDough"
                :sauce="selectedSauce"
                :ingredients="selectedIngredients"
              />
            </app-drop>
          </div>

          <div class="content__result">
            <p>
              Итого:
              <builder-price-counter
                :dough="selectedDough"
                :size="selectedSize"
                :sauce="selectedSauce"
                :ingredients="selectedIngredients"
              />
            </p>
            <button
              @click="addToCart"
              type="button"
              class="button"
              :disabled="!name || selectedIngredients.length === 0"
            >
              Готовьте!
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import misc from "../static/misc.json";
import pizza from "../static/pizza.json";
import user from "../static/user.json";
import {
  normalizeSize,
  normalizeSauce,
  normalizeFilling,
  normalizeDough,
} from "@/common/helpers/pizzaHelper";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";
import AppDrop from "@/common/components/AppDrop";

export default {
  name: "Index",
  components: {
    BuilderIngredientsSelector,
    BuilderSizeSelector,
    BuilderDoughSelector,
    BuilderPizzaView,
    BuilderPriceCounter,
    AppDrop,
  },
  data: () => ({
    misc,
    pizza,
    user,
    name: "",
    selectedDough: null,
    selectedSize: null,
    selectedSauce: null,
    selectedIngredients: [],
  }),
  created() {
    [this.selectedDough] = this.dough;
    [this.selectedSauce] = this.sauces;
    [this.selectedSize] = this.sizes;
  },
  computed: {
    sizes() {
      return this.pizza.sizes.map(normalizeSize);
    },
    sauces() {
      return this.pizza.sauces.map(normalizeSauce);
    },
    filling() {
      return this.pizza.ingredients.map(normalizeFilling);
    },
    dough() {
      return this.pizza.dough.map(normalizeDough);
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", {
        name: this.name,
        size: this.selectedSize,
        dough: this.selectedDough,
        sauce: this.selectedSauce,
        ingredients: this.selectedIngredients,
      });
    },
  },
};
</script>

<style scoped></style>
