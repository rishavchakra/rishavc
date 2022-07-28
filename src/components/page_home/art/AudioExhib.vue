<script setup lang="ts">
import MusicTitle from "@/components/page_home/art/MusicTitle.vue";
const numTitles = 7;
</script>

<template>
  <div class="w-full h-full relative grid place-content-center">
    <div class="">
      <MusicTitle v-for="n in numTitles" :num="numTitles - n" :key="n" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
