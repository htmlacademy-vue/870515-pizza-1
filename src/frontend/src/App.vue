<template>
  <div id="app">
    <app-layout>
      <template v-slot:default="{ addToCard }">
        <index @addToCart="addToCard" />
      </template>
    </app-layout>
  </div>
</template>

<script>
import Index from "@/views/Index.vue";
import AppLayout from "@/layouts/AppLayout";

export default {
  name: "App",
  components: { AppLayout, Index },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
