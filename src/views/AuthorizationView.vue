<script setup>
import { computed, ref, watch } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const email = ref("");
const password = ref("");

const isActive = computed(() => {
  if (email.value.trim() != "" && password.value.trim() != "") {
    return true;
  } else {
    return false;
  }
});

watch([email, password], () => {
  if (authStore.isError) {
    authStore.isError = false;
  }
});

const onSubmit = async () => {
  await authStore.login(`${email.value}`, `${password.value}`);
  if (!authStore.isError) {
    router.push("/");
  }
};
</script>

<template>
  <div class="container">
    <span class="error_message" v-if="authStore.isError">
      {{ authStore.errorMessage }}
    </span>
    <form @submit.prevent="onSubmit" class="form_container">
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
  margin-bottom: 30px;
}

.error_message {
  padding: 1vw;
  border: 2px solid #e13b37;
  border-radius: 10px;
  background-color: #f8f8f8;
  font-family: "St_sign normal";
  color: #e13b37;
  margin-top: 1vw;
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
  margin-top: 1vw;
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
  padding: 12px;
  font-size: 25px;
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
  font-size: 1.5vw;
  font-family: "St_Sign normal";
  color: #1e2859;
  margin-bottom: 2vw;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 1000px) {
  .link {
    font-size: 2.5vw;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 12vw;
  }

  .label {
    font-size: 5.5vw;
  }

  .input {
    font-size: 7vw;
    padding: 3vw;
  }

  .button {
    font-size: 5vw;
    padding: 4vw;
  }

  .form_container {
    width: 80vw;
  }

  .link {
    font-size: 4vw;
  }
}
</style>
