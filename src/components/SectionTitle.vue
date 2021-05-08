<template>
  <div class="max-w-lg mx-auto relative">
    <h2
      class="absolute text-6xl md:text-8xl font-mono font-bold text-gray-300 text-opacity-25 -mt-6 -ml-6"
    >
      {{ shadowText }}
    </h2>
    <h1 class="">{{ title }}</h1>
    <div class="h-1 w-10 bg-yellow-orange"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionTitle",
  props: {
    title: { type: String, required: true },
    shadowText: { type: String, required: true },
  },
});
</script>
