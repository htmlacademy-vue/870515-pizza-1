<template>
  <div id="app">
    <app-layout>
      <template v-slot:default="{ addToCard }">
        <router-view @addToCart="addToCard" />
      </template>
    </app-layout>
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayout";

export default {
  name: "App",
  components: { AppLayout },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
