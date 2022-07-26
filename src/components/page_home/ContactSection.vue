<template>
  <div class="h-screen w-screen grid place-content-center">
    <div class="w-[inherit] flex flex-col gap-4 p-8">
      <input v-model="name" />
      <input v-model="email" />
      <input v-model="msg" />
      <button :disabled="isInvalidContact" @click="onClickSend">Send</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      name: "",
      email: "",
      msg: "",
    };
  },

  methods: {
    onClickSend() {
      console.log(this.msgFormat);
    },
  },

  computed: {
    isInvalidContact(): boolean {
      return this.msg === "";
    },

    msgFormat(): string {
      return (
        "Message from: " +
        this.name +
        "\n" +
        "Email: " +
        this.email +
        "\n" +
        "Message:\n" +
        this.msg
      );
    },
  },
});
</script>
