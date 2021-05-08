<template>
  <section id="projects" class="py-20 px-6 md-px-0">
    <section-title title="What I've Built" shadow-text="Projects" />
    <project-item
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "@/components/SectionTitle.vue";
import ProjectItem from "@/components/ProjectItem.vue";
import projects from "@/data/projects.json";

export default defineComponent({
  name: "Projects",
  components: {
    SectionTitle,
    ProjectItem,
  },
  data() {
    return {
      projects,
    };
  },
});
</script>
