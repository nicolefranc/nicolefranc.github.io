<template>
  <div class="">
    <landing />
    <projects />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Landing from "@/sections/Landing.vue"; // @ is an alias to /src
import Projects from "@/sections/Projects.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Landing,
    Projects,
  },
});
</script>
