<script setup lang="ts">
import ContactSection from "@/components/page_home/ContactSection.vue";
import AboutSection from "@/components/page_home/AboutSection.vue";
import ArtSection from "@/components/page_home/ArtSection.vue";
import CodeSection from "@/components/page_home/CodeSection.vue";
import TitleSection from "@/components/page_home/TitleSection.vue";
</script>

<template>
  <main>
    <TitleSection id="title-section" />
    <AboutSection id="about-section" />
    <CodeSection id="code-section" />
    <ArtSection id="art-section" />
    <ContactSection id="contact-section" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    TitleSection,
    AboutSection,
    CodeSection,
    ArtSection,
    ContactSection,
  },
});
</script>
