<template>
  <div class="h-screen w-screen grid place-content-center">
    <div class="w-[inherit] flex flex-col gap-4 lg:p-32 md:p-16 p-4">
      <input class="text input" v-model="name" placeholder="Name" />
      <input class="text input" v-model="email" placeholder="Email" />
      <!-- <input class="text input" v-model="msg" placeholder="Message" /> -->
      <span
        contenteditable="true"
        class="text bg-white p-2 text-black inline-block"
        ref="msgInput"
        @input="updateMsg"
      ></span>
      <button
        class="text h-16"
        :disabled="isInvalidContact"
        @click="onClickSend"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
type inputElement = {
  textContent: string;
};
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

    updateMsg() {
      // this.msg = this.$refs.msgInput.value;
      // console.log(this.$refs.msgInput.textContent);
      this.msg = (this.$refs.msgInput as inputElement).textContent;
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

<style scoped>
.text {
  @apply text-3xl;
  @apply font-sans;
}

.input {
  @apply p-2;
  @apply text-black;
}
</style>
