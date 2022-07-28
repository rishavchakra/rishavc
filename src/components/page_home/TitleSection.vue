<template>
  <Transition appear name="fade-in" :duration="6000">
    <div
      class="w-screen h-screen grid place-content-center bg-gradient-to-b from-[#f472b6] to-[#fdba74]"
    >
      <div>
        <h1
          class="text-7xl font-sans text-center hover:tracking-widest duration-700 delay-75 text-white p-4"
        >
          Rishav Chakravarty
        </h1>
        <Transition name="cycle" mode="out-in">
          <h2
            class="role-title"
            v-if="roleIndex == 0"
            @click="goToSection('about-section')"
          >
            Student
          </h2>
          <h2
            class="role-title"
            v-else-if="roleIndex == 1"
            @click="goToSection('code-section')"
          >
            Programmer
          </h2>
          <h2
            class="role-title"
            v-else-if="roleIndex == 2"
            @click="goToSection('art-section', 'audio')"
          >
            Musician
          </h2>
          <h2
            class="role-title"
            v-else-if="roleIndex == 3"
            @click="goToSection('art-section', 'visual')"
          >
            Artist
          </h2>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { artTypes } from "../lib";
import { store } from "./store";
export default defineComponent({
  data() {
    return {
      roleIndex: 0,
      timer: 0,
    };
  },

  mounted() {
    this.timer = setInterval(this.cycleRole, 2700);
  },

  methods: {
    cycleRole() {
      this.roleIndex = (this.roleIndex + 1) % 4;
    },

    goToSection(section: string, artMode?: artTypes) {
      // document
      //   .getElementById(sections[this.roleIndex])
      //   ?.scrollIntoView({ behavior: "smooth" });
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      if (section == "art-section" && artMode) {
        store.artMode = artMode;
      }
    },
  },

  beforeUnmount() {
    clearInterval(this.timer);
  },
});
</script>

<style scoped>
.cycle-enter-active {
  transition: all 0.3s ease-out;
}
.cycle-leave-active {
  transition: all 0.3s ease-in;
}

.cycle-enter-from {
  transform: translateY(20px);
  opacity: 0;
}

.cycle-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 3s ease-in-out;
}

.fade-in-enter-from {
  @apply from-indigo-700;
  @apply to-cyan-600;
}

.fade-in-leave-to {
  @apply from-indigo-700;
  @apply to-cyan-600;
}

.role-title {
  font-family: Montserrat;
  text-align: center;
  @apply text-3xl;
  @apply text-white;
  @apply hover:tracking-widest;
  @apply duration-700;
  @apply delay-75;
  @apply hover:underline;
}
</style>
