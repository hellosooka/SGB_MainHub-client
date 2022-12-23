<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
const router = useRouter();

const unLogin = () => {
  authStore.unLogin();
  router.push("/");
};
</script>

<template>
  <div class="settings_container">
    <div class="buttons_container"></div>
    <button
      v-if="authStore.isRegistering"
      class="unLogin_button"
      @click="unLogin"
    >
      Выйти из аккаунта
    </button>
  </div>
</template>

<style scoped>
.settings_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons_container {
  display: flex;
  flex-direction: column;
}

.unLogin_button {
  font-size: 1.2vw;
  font-family: "St_sign normal";
  border: none;
  background-color: white;
  color: #e13b37;
}

.unLogin_button:hover {
  text-decoration: underline;
}
</style>
