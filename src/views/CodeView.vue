<template>
  <div>
    <p>Beep boop</p>
    <GithubSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GithubSection from "../components/page_code/GithubSection.vue";
export default defineComponent({ components: { GithubSection } });
</script>
