import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const isRegistering = ref(false);
  const email = ref("");
  const nickname = ref("NICKNAME");
  const token = ref("");

  function registering() { }

  return { isRegistering, email, nickname };
});
