<template>
  <label>
    <input
      :value="value"
      type="radio"
      name="diameter"
      class="visually-hidden"
    />
    <component :is="description ? 'b' : 'span'">{{ label }}</component>
    <span v-if="description">{{ description }}</span>
  </label>
</template>

<script>
export default {
  name: "ItemCounter",
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
      type: [Array, String],
    },
  },
};
</script>

<style scoped></style>
