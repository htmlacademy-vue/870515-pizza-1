<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <a href="#" class="logo">
          <img
            src="../assets/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="#">0 ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>

    <main class="content">
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
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <builder-pizza-view
                :dough="selectedDough"
                :size="selectedSize"
                :sauce="selectedSauce"
                :ingredients="selectedIngredients"
              />
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
              <button type="button" class="button" disabled>Готовьте!</button>
            </div>
          </div>
        </div>
      </form>
    </main>
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

export default {
  name: "Index",
  components: {
    BuilderIngredientsSelector,
    BuilderSizeSelector,
    BuilderDoughSelector,
    BuilderPizzaView,
    BuilderPriceCounter,
  },
  data: () => ({
    misc,
    pizza,
    user,
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
      return this.pizza.sizes.map((size) => normalizeSize(size));
    },
    sauces() {
      return this.pizza.sauces.map((sauce) => normalizeSauce(sauce));
    },
    filling() {
      return this.pizza.ingredients.map((filling) => normalizeFilling(filling));
    },
    dough() {
      return this.pizza.dough.map((dough) => normalizeDough(dough));
    },
  },
  methods: {},
};
</script>

<style scoped></style>
