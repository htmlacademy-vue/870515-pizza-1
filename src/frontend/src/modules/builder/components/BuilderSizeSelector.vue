<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <selector-item
          v-for="size in sizes"
          :class="`diameter__input diameter__input--${size.code}`"
          :value="size.code"
          :label="size.name"
          :key="size.id"
          :value-model="value ? value.code : null"
          @input="$emit('input', size)"
          name="diameter"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectorItem from "@/common/components/SelectorItem.vue";

export default {
  name: "BuilderSizeSelector",
  components: { SelectorItem },
  props: {
    sizes: {
      type: Array,
      required: true,
    },
    value: {
      type: Object,
    },
  },
};
</script>
