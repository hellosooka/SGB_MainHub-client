import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import localforage from "localforage";

export const useAuthStore = defineStore("auth", () => {
  const isRegistering = ref(false);
  const isError = ref(false);
  const errorMessage = ref("");
  const email = ref("");
  const nickname = ref("NICKNAME");
  const token = ref("");
  const HOST = ref("http://45.80.68.47:7000");

  async function login(userEmail, userPassword) {
    try {
      const json = generateJSON(userEmail, "NONE", userPassword);
      const response = await axios.post(`${HOST.value}/auth/login`, json);
      if (response.data) {
        const userNickname = await getUserNicknameByEmail(userEmail);
        saveUserData(userEmail, userNickname, response.data.token);
        isRegistering.value = true;
      }
    } catch (e) {
      showError(e);
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

  async function getUserNicknameByEmail(email) {
    try {
      const response = await axios.get(`${HOST.value}/users/${email}/nickname`);
      return response.data.nickname;
    } catch (e) {
      showError(e);
    }
  }

  function saveUserData(userEmail, userNickname, userToken) {
    token.value = userToken;
    email.value = userEmail;
    nickname.value = userNickname;
    saveUserDataLocal();
  }

  function saveUserDataLocal() {
    localforage.setItem("token", token.value);
    localforage.setItem("email", email.value);
    localforage.setItem("nickname", nickname.value);
  }

  function showError(e) {
    isError.value = true;
    errorMessage.value = e.response.data.message;
    if (errorMessage.value == "") {
      errorMessage.value = "Server error";
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
      showError(e);
    }
  }

  async function unLogin() {
    await removeLocalUserData();
    removeUserData();
  }

  async function removeLocalUserData() {
    await localforage.removeItem("token");
    await localforage.removeItem("email");
    await localforage.removeItem("nickname");
  }

  function removeUserData() {
    token.value = "";
    email.value = "";
    nickname.value = "";
    isRegistering.value = false;
  }

  async function loadUser() {
    const localToken = await localforage.getItem("token");
    const localEmail = await localforage.getItem("email");
    const localNickname = await localforage.getItem("nickname");
    if (localToken && localEmail && localNickname) {
      token.value = localToken;
      email.value = localEmail;
      nickname.value = localNickname;
      isRegistering.value = true;
    }
  }

  return {
    isRegistering,
    token,
    isError,
    email,
    nickname,
    errorMessage,
    register,
    login,
    loadUser,
    unLogin,
  };
});
