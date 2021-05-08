<template>
  <navigation />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "@/components/Navigation.vue";

export default defineComponent({
  name: "App",
  components: {
    Navigation,
  },
});
</script>
<style>
#app {
  font-family: Noto Sans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
