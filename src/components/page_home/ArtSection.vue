<template>
  <div class="h-screen w-screen flex flex-row">
    <AudioExhib v-if="onArtSlide" class="art-exhib" />
    <button @click="onClickSwitchAV" class="p-8">{{ otherArtType }}</button>
    <VisualExhib v-if="onVisualSlide" class="art-exhib" />
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

<style scoped>
.art-exhib {
  @apply h-screen;
  @apply w-screen;
}
</style>
