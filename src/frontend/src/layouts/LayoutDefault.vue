<template>
  <div class="layout">
    <app-header />

    <slot />
  </div>
</template>

<script>
import AppHeader from "@/layouts/AppHeader";

export default {
  name: "LayoutDefault",
  components: { AppHeader },
};
</script>
