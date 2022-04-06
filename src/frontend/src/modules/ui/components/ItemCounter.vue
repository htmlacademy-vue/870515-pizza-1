<template>
  <div class="counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      @click="$emit('input', value - 1)"
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
      @click="$emit('input', value + 1)"
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
  },
};
</script>

<style scoped></style>
