<template>
  <div
    v-if="!isSmallScreen"
    class="h-screen w-screen flex flex-row items-center justify-center"
  >
    <!-- 'Stack' of technologies from high level to low level -->
    <div class="flex flex-col-reverse items-center justify-evenly w-1/2">
      <div class="stack-item" @mouseover="handleHoverMode('systems')">
        Systems
      </div>
      <div class="stack-item" @mouseover="handleHoverMode('graphics')">
        Graphics
      </div>
      <div class="stack-item" @mouseover="handleHoverMode('data')">
        Data Science
      </div>
      <div class="stack-item" @mouseover="handleHoverMode('web')">Web Dev</div>
      <div class="stack-item" @mouseover="handleHoverMode('design')">
        Design
      </div>
    </div>
    <div class="w-1/2 flex flex-col items-center justify-center">
      <div>
        <Transition name="title" mode="out-in">
          <h1 v-if="mode === 'design'" class="title-text">Design</h1>
          <h1 v-else-if="mode === 'web'" class="title-text">Web Development</h1>
          <h1 v-else-if="mode === 'data'" class="title-text">Data Science</h1>
          <h1 v-else-if="mode === 'graphics'" class="title-text">Graphics</h1>
          <h1 v-else-if="mode === 'systems'" class="title-text">Systems</h1>
          <h1 v-else>Default</h1>
        </Transition>
      </div>
      <div>
        <Transition name="description" mode="out-in">
          <p v-if="mode === 'design'" class="desc-text">
            Description for how I can do design
          </p>
          <p v-else-if="mode === 'web'" class="desc-text">
            Web development beep boop
          </p>
          <p v-else-if="mode === 'data'" class="desc-text">ARL or some junk</p>
          <p v-else-if="mode === 'graphics'" class="desc-text">OpenGL go brr</p>
          <p v-else-if="mode === 'systems'" class="desc-text">Sissytem baka</p>
          <p v-else class="desc-text">
            Description of what I do with nothing selected
          </p>
        </Transition>
      </div>
    </div>
  </div>
  <div v-else class="h-screen w-screen"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
type CodeMode = "none" | "design" | "web" | "data" | "graphics" | "systems";
export default defineComponent({
  data() {
    return {
      mode: "none" as CodeMode,
      windowWidth: window.innerWidth,
    };
  },

  computed: {
    isSmallScreen() {
      return this.windowWidth < 768;
    },
  },

  methods: {
    handleHoverMode(mode: CodeMode) {
      this.mode = mode;
    },
  },

  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
});
</script>

<style>
.stack-item {
  @apply bg-indigo-400;
  @apply bg-opacity-60;
  @apply rounded-md;
  @apply my-[-11vw];
  width: 30vw;
  height: 30vw;
  transform: skew(-45deg) scaleY(0.5);
  font-size: 5vw;
  font-family: Montserrat;
  text-align: center;
  padding: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 500ms ease-in-out;
}

.stack-item:hover {
  transform: translateX(10vw) skew(-30deg) scaleY(0.7);
}

.title-text {
  @apply font-sans;
  @apply text-3xl;
  @apply m-3;
}

.desc-text {
  @apply font-sans;
  @apply p-6;
  @apply rounded-md;
  @apply bg-indigo-400;
  @apply bg-opacity-50;
}

.title-enter-active {
  transition: all 600ms ease-out;
}
.title-leave-active {
  transition: all 600ms ease-in;
}

.title-enter-from,
.title-leave-to {
  transform: translateX(20vw);
  opacity: 0;
}

.description-enter-active {
  transition: all 900ms ease-out;
}
.description-leave-active {
  transition: all 900ms ease-in;
}

.description-enter-from,
.description-leave-to {
  transform: translateX(20vw);
  opacity: 0;
}
</style>
