import { reactive } from "vue";
import type { artTypes } from "../lib";

export const store = reactive({
  artMode: "audio" as artTypes,
});
