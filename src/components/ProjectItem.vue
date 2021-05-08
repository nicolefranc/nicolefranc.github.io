<template>
  <div
    :class="[
      project.id % 2 !== 0
        ? 'project-item-wrapper-reverse'
        : 'project-item-wrapper',
    ]"
  >
    <!-- Project Content -->
    <div :class="[project.id % 2 !== 0 && 'md:flex md:flex-col md:items-end']">
      <h2 class="font-bold text-3xl -mb-10 -ml-1 text-indigo text-opacity-5">
        {{ project.name }}
      </h2>
      <h2 class="font-bold text-3xl text-yellow-orange">{{ project.name }}</h2>
      <p class="py-6">{{ project.desc }}</p>
      <ul class="flex font-mono text-sm text-gray-400">
        <li
          v-for="tech in project.tech"
          :key="tech"
          :class="[project.id % 2 !== 0 ? 'ml-4' : 'mr-4']"
        >
          {{ tech }}
        </li>
      </ul>
      <ul class="flex mt-4">
        <li
          v-for="link in project.links"
          :key="link"
          :class="[project.id % 2 !== 0 ? 'ml-4' : 'mr-4']"
        >
          <a :href="link.url" target="_blank">
            <img
              v-if="link.type === 'github'"
              src="../assets/icons/github.svg"
              :alt="link.url"
              class="icon"
            />
            <img
              v-else-if="link.type === 'site'"
              src="../assets/icons/foreign.svg"
              :alt="link.url"
              class="icon"
            />
          </a>
        </li>
      </ul>
    </div>

    <!-- Project Image -->
    <div>
      <!-- Only webpack supports below. TODO: Migrate to webpack and change to the implementation below -->
      <!-- <img :src="require(`@${project.src}`)" :alt="project.name" /> -->
      <img
        v-if="project.name === 'Overdue'"
        src="../assets/images/overdue/overdue-home.png"
        :alt="project.name"
      />
      <img
        v-if="project.name === 'Virtual ADSS'"
        src="../assets/images/virtual-adss/virtual-adss-home.png"
        :alt="project.name"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type Link = {
  type: string;
  url: string;
};

type Project = {
  id: number;
  name: string;
  desc: string;
  path: string;
  tech: Array<string>;
  links: Array<Link>;
};

export default defineComponent({
  props: {
    // Source for why Object as () => Project works: https://frontendsociety.com/using-a-typescript-interfaces-and-types-as-a-prop-type-in-vuejs-508ab3f83480
    project: { type: Object as () => Project, required: true },
  },
});
</script>
