<script setup lang="ts">
import { musicTitleConsts as consts } from "@/components/lib";
</script>

<template>
  <h1
    :style="{
      'animation-delay': consts.titleOscDelay * num - 2 + 's',
      color: consts.gruvColors[num % consts.gruvColors.length],
      left: consts.xOffset * num + 'px',
    }"
    class="music-title animate-oscillate text-9xl font-['Chicle'] absolute top-0 stroke-black text-center"
  >
    Music
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    num: { type: Number, required: true },
  },

  computed: {
    styleObject() {
      return {
        "animation-delay": this.num * consts.titleOscDelay,
        color: consts.gruvColors[this.num],
      };
    },
  },
});
</script>

<style scoped>
.music-title {
  -webkit-text-stroke: 3px #3c3836;
}
</style>
