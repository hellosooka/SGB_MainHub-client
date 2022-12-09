<script setup>
import { computed, ref } from "vue";

const email = ref("");
const password = ref("");

const isActive = computed(() => {
  if (email.value.trim() != "" && password.value.trim() != "") {
    return true;
  } else {
    return false;
  }
});
</script>

<template>
  <div class="container">
    <form class="form_container">
      <span class="title"> Авторизация </span>
      <label class="label" for="email"> Электронная почта </label>
      <input v-model="email" class="input" id="email" type="email" />
      <label class="label" for="password"> Пароль </label>
      <input v-model="password" class="input" id="password" type="password" />
      <button
        :class="{ active: isActive }"
        :disabled="!isActive"
        class="button"
        type="submit"
      >
        Войти
      </button>
    </form>
    <router-link class="link" to="/registration">
      У меня нет аккаунта
    </router-link>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 50px;
  font-family: "St_Sign condensed";
  color: #1e2859;
  margin-bottom: 5px;
}
.form_container {
  display: flex;
  flex-direction: column;
  border: 2px solid #ebebeb;
  border-radius: 15px;
  padding: 35px;
  background-color: #f8f8f8;
}
.label {
  margin-left: 5px;
  margin-top: 12px;
  margin-bottom: 3px;
  font-size: 25px;
  font-family: "St_Sign normal";
}
.input {
  padding: 8px;
  font-size: 28px;
  font-family: "St_Sign normal";
  border-radius: 10px;
  border: 2px solid #ebebeb;
}
.button {
  margin-top: 25px;
  font-size: 25px;
  border-radius: 10px;
  border: 2px solid #ebebeb;
  padding: 8px;
  font-family: "St_Sign normal";

  transition: 500ms cubic-bezier(0.47, 0, 0.745, 0.715);
}

.active {
  background-color: #1e2859;
  color: white;
  border: 2px solid #1e2859;
}

.link {
  padding-top: 8px;
  font-size: 18px;
  font-family: "St_Sign normal";
  color: #1e2859;
}

.link:hover {
  text-decoration: underline;
}
</style>
