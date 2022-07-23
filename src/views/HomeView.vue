<script setup lang="ts">
import Contact from "../components/page_home/contact.vue";
import About from "@/components/page_home/about.vue";
import Art from "@/components/page_home/art.vue";
import Code from "@/components/page_home/code.vue";
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
