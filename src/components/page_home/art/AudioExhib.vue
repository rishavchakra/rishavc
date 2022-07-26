<script setup lang="ts">
import MusicTitle from "@/components/page_home/art/musicTitle.vue";
const numTitles = 7;
</script>

<template>
  <div>
    <div class="title-container">
      <MusicTitle v-for="n in numTitles" :num="numTitles - n" :key="n" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped lang="scss">
.title-container {
  position: relative;
}
</style>
