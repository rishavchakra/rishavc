<template>
  <div>
    <AudioExhib v-if="onArtSlide" />
    <button @click="onClickSwitchAV">{{ otherArtType }}</button>
    <VisualExhib v-if="onVisualSlide" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AudioExhib from "./art/AudioExhib.vue";
import VisualExhib from "./art/VisualExhib.vue";
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

  components: { AudioExhib, VisualExhib },

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
