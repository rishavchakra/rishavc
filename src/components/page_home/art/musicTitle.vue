<script setup lang="ts">
import { musicTitleConsts as consts } from "@/components/constants";
</script>

<template>
  <h1
    :style="{
      'animation-delay': consts.titleOscDelay * num - 2 + 's',
      color: consts.gruvColors[num % consts.gruvColors.length],
      left: consts.xOffset * num + 'px',
    }"
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
