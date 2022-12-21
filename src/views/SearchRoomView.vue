<script setup>
import { computed, ref } from "vue";
import { useAuthStore } from "../stores/auth";
import axios from "axios";

const nickname = ref("");
const code = ref("");
const isError = ref(false);

const isActive = computed(() => {
  if (nickname.value.trim() == "" || code.value.trim() == "") {
    isError.value = false;
    return false;
  } else {
    return true;
  }
});

const authStore = useAuthStore();

const onSubmit = async () => {
  const room = await getRoomByRoomCode();
  await addUserToRoom(room.id);
  //window.location.href = `https://sgb-bunker-client.vercel.app/room/${room.roomCode}`;
};

const getRoomByRoomCode = async () => {
  try {
    const response = await axios.get(
      `https://sgb-room-service.vercel.app/room/${code.value}/byRoomCode`
    );
    isError.value = false;
    return response.data;
  } catch (e) {
    isError.value = true;
    return false;
  }
};

const addUserToRoom = async (roomId) => {
  try {
    await axios.post(
      `https://sgb-room-service.vercel.app/room/add-client/${roomId}`,
      { login: authStore.nickname, nickname: nickname.value }
    );
  } catch (e) {
    console.log(e.message);
  }
};
</script>

<template>
  <div class="container">
    <form @submit.prevent="onSubmit" class="form_container">
      <span class="error_message" v-if="isError"> Комната не найдена </span>

      <label for="nickname" class="label" v-upper-case> Имя </label>
      <input v-model="nickname" id="nickname" class="input" type="text" />
      <label for="code" class="label" v-upper-case> Код комнаты </label>
      <input v-model="code" id="code" class="input" type="text" />
      <button :disabled="!isActive" :class="{ active: isActive }" class="button" type="submit">
        Играть
      </button>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  background-color: #141414;
  padding-bottom: 50px;
}

.form_container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: 300ms;
}

.error_message {
  font-family: "St_Sign normal";
  font-size: 2vw;
  text-align: center;
  padding: 1vw;
  margin-top: 2vw;
  background-color: #a83142;
  color: white;
  border-radius: 5px;

  transition: 300ms;
}

.label {
  margin-top: 20px;
  margin-left: 9px;
  font-size: 30px;
  color: white;
  font-family: "St_Sign normal";
}

.input {
  margin-top: 5px;
  background-color: #f8f8f8;
  border: 2px solid #ebebeb;
  font-size: 28px;
  padding: 6px;
}

.button {
  margin-top: 15px;
  font-size: 35px;
  padding: 7px;
  border: 2px solid #434343;
  font-family: "St_Sign condensed";

  transition: 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.active {
  padding: 9px;
  background-color: #e13b37;
  color: white;
  border: none;
}

@media (max-width: 450px) {
  .error_message {
    margin-top: 4vw;
    padding: 2vw;
    font-size: 5vw;
  }

  .label {
    font-size: 25px;
  }

  .form_container {
    width: 240px;
  }
}
</style>
