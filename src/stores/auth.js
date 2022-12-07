import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const isRegistering = ref(true);
  const email = ref("");
  const nickname = ref("NICKNAME");
  const token = ref("");

  return { isRegistering, email, nickname };
});
