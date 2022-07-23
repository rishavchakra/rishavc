<template>
  <p>Hi! I'm Rishav.</p>
  <p>I'm an {{ age }} year old undergraduate at Dartmouth College.</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {},

  computed: {
    // Because I'm too lazy to be bothered to update it every year
    age() {
      const currDate = new Date();
      const birthDate = new Date("2003-07-01");
      const diff = new Date(currDate.getTime() - birthDate.getTime());
      return diff.getFullYear() - 1970;
    },
  },
});
</script>
