import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  const isRegistering = ref(true);
  const email = ref("");
  const nickname = ref("NICKNAME");
  const token = ref("");

  const HOST = ref("http://localhost:7000");

  return { isRegistering, email, nickname };
});
