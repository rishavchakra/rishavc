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
import type { artTypes } from "../lib";
import { store } from "./store";
export default defineComponent({
  data() {
    return {};
  },

  methods: {
    onClickSwitchAV() {
      store.artMode = this.otherArtType;
    },

    setToAV(mode: artTypes) {
      store.artMode = mode;
    },
  },

  components: { AudioExhib, VisualExhib },

  computed: {
    onArtSlide(): boolean {
      return store.artMode === "audio";
    },
    onVisualSlide(): boolean {
      return store.artMode === "visual";
    },
    otherArtType(): artTypes {
      if (store.artMode === "audio") {
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
