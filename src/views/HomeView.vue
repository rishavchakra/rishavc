<script setup lang="ts">
import ContactSection from "@/components/page_home/ContactSection.vue";
import AboutSection from "@/components/page_home/AboutSection.vue";
import ArtSection from "@/components/page_home/ArtSection.vue";
import CodeSection from "@/components/page_home/CodeSection.vue";
import TitleSection from "@/components/page_home/TitleSection.vue";
</script>

<template>
  <main>
    <TitleSection />
    <AboutSection />
    <CodeSection />
    <ArtSection />
    <ContactSection />
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
