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

          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>

              <div class="sheet__content dough">
                <selector-item
                  v-for="doughItem in dough"
                  :class="`dough__input dough__input--${doughItem.code}`"
                  :description="doughItem.description"
                  :label="doughItem.name"
                  :key="doughItem.id"
                  name="dought"
                />
              </div>
            </div>
          </div>

          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>

              <div class="sheet__content diameter">
                <selector-item
                  v-for="size in sizes"
                  :class="`diameter__input diameter__input--${size.code}`"
                  :label="size.name"
                  :key="size.id"
                  name="diameter"
                />
              </div>
            </div>
          </div>

          <div class="content__ingredients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингредиенты
              </h2>

              <div class="sheet__content ingredients">
                <div class="ingredients__sauce">
                  <p>Основной соус:</p>

                  <label
                    v-for="sauce in sauces"
                    :key="sauce.id"
                    class="radio ingredients__input"
                  >
                    <input type="radio" name="sauce" :value="sauce.code" />
                    <span>{{ sauce.name }}</span>
                  </label>
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

                      <ItemCounter
                        v-model="ingredientsCounter"
                        class="ingredients__counter"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

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
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
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
import ItemCounter from "@/modules/ui/ItemCounter.vue";
import SelectorItem from "@/modules/ui/SelectorItem.vue";

export default {
  name: "Index",
  components: { ItemCounter, SelectorItem },
  data: () => ({ misc, pizza, user, ingredientsCounter: 0 }),
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
