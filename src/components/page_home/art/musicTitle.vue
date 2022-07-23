<script setup lang="ts">
const titleOscDelay = 0.1;
const xOffset = 6;
const colors: string[] = [
  "#edbb2", // white
  "#8ec07c", // aqua
  "#de869b", // purple
  "#83a598", // blue
  "#fabd2f", // yellow
  "#babb26", // green
  "#fb4934", // red
];
</script>

<template>
  <h1
    :style="{
      'animation-delay': titleOscDelay * num - 2 + 's',
      color: colors[num % colors.length],
      left: xOffset * num + 'px',
    }"
  >
    Music
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {},

  props: {
    num: { type: Number, required: true },
  },

  computed: {
    styleObject() {
      return {
        "animation-delay": this.num * titleOscDelay,
        color: colors[this.num],
      };
    },
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chicle&display=swap");
@keyframes oscillate {
  from {
    transform: none;
  }

  to {
    transform: translateY(3rem);
  }
}

h1 {
  font-size: 8rem;
  font-family: Chicle;
  opacity: 100%;

  -webkit-text-stroke: 3px #3c3836;

  position: absolute;
  top: 0;

  animation: 3s infinite alternate-reverse ease-in-out oscillate;
}
</style>
