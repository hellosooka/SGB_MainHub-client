import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";
import axios from "axios";

export const useRoomStore = defineStore("room", () => {
  const authStore = useAuthStore();

  const HOST = ref("http://45.80.68.47:5000");

  const isError = ref(false);
  const errorMessage = ref("");

  const connectToRoom = async (nickname, code) => {
    const room = await getRoomByRoomCode(code);
    if (room) {
      await addUserToRoom(room.id, nickname);
      await redirectToGame(room.game.link, code.value);
    }
  };

  const getRoomByRoomCode = async (code) => {
    try {
      const response = await axios.get(
        `${HOST.value}/room/${code.value}/byRoomCode`
      );
      isError.value = false;
      return response.data;
    } catch (e) {
      showError(e);
    }
  };

  function showError(e) {
    isError.value = true;
    errorMessage.value = e.response.data.message;
    if (errorMessage.value == "") {
      errorMessage.value = "Server error";
    }
  }

  const addUserToRoom = async (roomId, nickname) => {
    try {
      const response = await axios.post(
        `http://45.80.68.47:5000/room/add-client/${roomId}`,
        {
          login: authStore.nickname,
          nickname: nickname.value,
        }
      );
      isError.value = false;
      return response.data;
    } catch (e) {
      showError(e);
    }
  };

  const redirectToGame = async (gameLink, roomCode) => {
    window.location.href = `${gameLink}/room/${roomCode}`;
  };

  return {
    connectToRoom,
    isError,
    errorMessage,
  };
});
