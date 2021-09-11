<template>
  <header class="max-w-xl mx-auto my-0 py-12">
    <div class="relative mx-auto my-0">
      <!-- Text -->
      <div
        class="absolute z-10 mt-14 xs:mt-24 ml-16 xs:ml-20 md:ml-24 text-white"
      >
        <h1 class="font-mono font-semibold text-2xl">
          <span>Hi, my name is </span>
          <span class="md:hidden"><br /></span>
          <span class="text-yellow-orange font-bold xs:text-4xl">Nicole.</span>
        </h1>
        <h2
          class="font-mono font-normal my-2 xs:my-4 text-xs xs:text-base leading-loose"
        >
          I'm a
          <span class="border-b-2 border-yellow-orange">Computer Science</span>
          student<br />and aspiring
          <span class="border-b-2 border-yellow-orange">Software Engineer</span
          >.
        </h2>
        <!-- <a
          href="#projects"
          class="font-mono font-light text-xs xs:text-sm border-b-2 border-yellow-orange hover:bg-indigo hover:text-yellow-orange"
          >View Projects</a
        > -->
      </div>
      <!-- Terminal -->
      <img
        src="../assets/images/terminal.png"
        alt="Hi, my name is Nicole"
        class="w-full relative mx-auto my-0"
      />
      <!-- Avatar -->
      <img
        src="../assets/images/avatar.png"
        alt="Avatar of Nicole"
        class="w-1/3 relative mx-auto -mt-20 xs:-mt-48"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Landing",
});
</script>
