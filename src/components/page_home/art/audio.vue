<script setup lang="ts">
import MusicTitle from "./musicTitle.vue";
const numTitles = 7
</script>

<template>
  <div>
    <div class="title-container">
      <MusicTitle v-for="n in numTitles" :num="numTitles - n" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {},
});
</script>

<style scoped lang="scss">
.title-container {
  position: relative;
}
</style>
