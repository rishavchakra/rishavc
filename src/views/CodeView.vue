<template>
  <div>
    <p>Beep boop</p>
    <Github />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Github from "../components/page_code/GithubSection.vue";
export default defineComponent({ components: { Github } });
</script>
