<script setup>
import { computed, ref } from "vue";
import { useRoomStore } from "../stores/room";

const nickname = ref("");
const code = ref("");

const isActive = computed(() => {
  if (nickname.value.trim() == "" || code.value.trim() == "") {
    roomStore.isError = false;
    return false;
  } else {
    return true;
  }
});

const roomStore = useRoomStore();

const onSubmit = async () => {
  await roomStore.connectToRoom(nickname, code);
};
</script>

<template>
  <div class="room_background">
    <div class="room_container">
      <form @submit.prevent="onSubmit" class="form_container">
        <span class="error_message" v-if="roomStore.isError">
          {{ roomStore.errorMessage }}
        </span>

        <label for="nickname" class="label" v-upper-case> Имя </label>
        <input v-model="nickname" id="nickname" class="input" type="text" />
        <label for="code" class="label" v-upper-case> Код комнаты </label>
        <input v-model="code" id="code" class="input" type="text" />
        <button
          :disabled="!isActive"
          :class="{ active: isActive }"
          class="button"
          type="submit"
        >
          Играть
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.room_background {
  background-color: #141414;
}

.room_container {
  display: flex;
  justify-content: center;
  height: 100%;
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
