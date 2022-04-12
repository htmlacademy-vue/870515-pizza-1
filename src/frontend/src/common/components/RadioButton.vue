<template>
  <label class="radio">
    <input v-model="valueProxy" :name="name" :value="value" type="radio" />
    <span>{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "RadioButton",
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
