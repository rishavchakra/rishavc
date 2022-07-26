<script setup lang="ts">
import Contact from "../components/page_home/ContactSection.vue";
import About from "@/components/page_home/AboutSection.vue";
import Art from "@/components/page_home/ArtSection.vue";
import Code from "@/components/page_home/CodeSection.vue";
</script>

<template>
  <main>
    <About />
    <Code />
    <Art />
    <Contact />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  components: { Contact },
});
</script>
