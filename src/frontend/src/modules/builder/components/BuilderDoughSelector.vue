<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <selector-item
          v-for="doughItem in dough"
          :value="doughItem.code"
          :class="`dough__input dough__input--${doughItem.code}`"
          :description="doughItem.description"
          :label="doughItem.name"
          :key="doughItem.id"
          @input="$emit('input', doughItem)"
          name="dought"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectorItem from "@/modules/ui/components/SelectorItem.vue";

export default {
  name: "BuilderDoughSelector",
  components: { SelectorItem },
  props: {
    dough: {
      type: Array,
      required: true,
    },
    value: {
      type: Object,
    },
  },
};
</script>
