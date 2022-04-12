<template>
  <div class="counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      @click="onRemove"
      :disabled="value === 0"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="value"
      @input="$emit('input', Number($event.target.value))"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="onAdd"
      :disabled="value >= max"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ItemCounter",
  props: {
    value: {
      type: Number,
    },
    max: {
      type: Number,
      default: Infinity,
    },
  },
  methods: {
    onRemove() {
      const newValue = this.value - 1;

      this.$emit("remove", newValue);
      this.$emit("input", newValue);
    },
    onAdd() {
      const newValue = this.value + 1;

      this.$emit("add", newValue);
      this.$emit("input", newValue);
    },
  },
};
</script>

<style scoped></style>
