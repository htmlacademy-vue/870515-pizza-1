<template>
  <label>
    <input
      v-model="valueProxy"
      :name="name"
      :value="value"
      type="radio"
      class="visually-hidden"
    />
    <component :is="description ? 'b' : 'span'">{{ label }}</component>
    <span v-if="description">{{ description }}</span>
  </label>
</template>

<script>
export default {
  name: "SelectorItem",
  model: {
    prop: "value-model",
    event: "input",
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    value: {
      type: [String, Number],
    },
    valueModel: {
      type: [String, Number],
    },
  },
  computed: {
    valueProxy: {
      get() {
        return this.valueModel;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style scoped></style>
