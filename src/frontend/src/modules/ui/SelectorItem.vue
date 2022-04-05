<template>
  <label>
    <input
      :value="value"
      :id="value"
      :name="name"
      :checked="checked"
      @change="log"
      type="radio"
      class="visually-hidden"
    />
    <component :is="description ? 'b' : 'span'">{{ label }}</component>
    <span v-if="description">{{ description }}</span>
  </label>
</template>

<script>
export default {
  name: "ItemCounter",
  model: {
    prop: "checked",
    event: "change",
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
    checked: {
      type: [Array, Boolean],
    },
  },
  methods: {
    log(event) {
      // TODO: как получить новое значение ?
      console.log(event);
      // this.$emit('change')
    },
  },
};
</script>

<style scoped></style>
