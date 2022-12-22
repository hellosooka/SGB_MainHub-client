import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  const isRegistering = ref(false);
  const isError = ref(false);
  const errorMessage = ref("");
  const email = ref("");
  const nickname = ref("NICKNAME");
  const token = ref("");
  const HOST = ref("http://45.80.68.47:7000");

  async function login(userEmail, userNickname, userPassword) {
    try {
      const json = generateJSON(userEmail, "NONE", userPassword);
      const response = await axios.post(`${HOST.value}/auth/login`, json);
      if (response.data) {
        saveUserData(userEmail, userNickname, response.data.token);
        isRegistering.value = true;
      }
    } catch (e) {
      isError.value = true;
      errorMessage.value = e.response.data.message;
      if (errorMessage.value == "") {
        errorMessage.value = "Server error";
      }
    }
  }

  async function register(userEmail, userNickname, userPassword) {
    try {
      const json = generateJSON(userEmail, userNickname, userPassword);
      const response = await axios.post(`${HOST.value}/auth/register`, json);
      if (response.data) {
        saveUserData(userEmail, userNickname, response.data.token);
        isRegistering.value = true;
      }
    } catch (e) {
      isError.value = true;
      errorMessage.value = e.response.data.message;
      if (errorMessage.value == "") {
        errorMessage.value = "Server error";
      }
    }
  }

  function generateJSON(userEmail, userNickname, userPassword) {
    const json = {
      nickname: userNickname,
      email: userEmail,
      password: userPassword,
    };
    return json;
  }

  function saveUserData(userEmail, userNickname, userToken) {
    token.value = userToken;
    email.value = userEmail;
    nickname.value = userNickname;
  }

  return {
    isRegistering,
    isError,
    email,
    nickname,
    errorMessage,
    register,
    login,
  };
});
