<template>
  <div>
    <Audio v-if="onArtSlide" />
    <button @click="onClickSwitchAV">{{ otherArtType }}</button>
    <Visual v-if="onVisualSlide" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Audio from "./art/audio.vue";
import Visual from "./art/visual.vue";
type artTypes = "audio" | "visual";
export default defineComponent({
  data() {
    return {
      artType: "audio" as artTypes,
    };
  },

  methods: {
    onClickSwitchAV() {
      this.artType = this.otherArtType;
    },
  },

  components: { Audio, Visual },

  computed: {
    onArtSlide(): boolean {
      return this.artType === "audio";
    },
    onVisualSlide(): boolean {
      return this.artType === "visual";
    },
    otherArtType(): artTypes {
      if (this.artType === "audio") {
        return "visual";
      } else {
        return "audio";
      }
    },
  },
});
</script>
