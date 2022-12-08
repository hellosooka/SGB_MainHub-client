<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "../../stores/auth";

const authStroe = useAuthStore();
const route = useRoute();
const currentRoute = computed(() => route.name);
</script>

<template>
  <div class="container">
    <router-link
      v-if="authStroe.isRegistering"
      to="/purchases"
      :class="{ active: currentRoute === 'purchases' }"
      class="button purchases"
      v-upper-case
    >
      Покупки
    </router-link>
    <router-link
      to="/settings"
      class="button"
      :class="{
        active: currentRoute === 'settings',
        purchases: !authStroe.isRegistering,
      }"
      v-upper-case
    >
      настройки
    </router-link>

    <router-link
      v-if="authStroe.isRegistering"
      class="button nickname"
      :class="{ active: currentRoute === 'home' }"
      to="/"
      v-upper-case
    >
      {{ authStroe.nickname }}
    </router-link>
    <router-link
      v-upper-case
      v-else
      to="/registration"
      :class="{ active: currentRoute === 'registration' }"
      class="registration"
    >
      Зарегестрироваться
    </router-link>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  background: #ebebeb;
  align-items: center;
  justify-content: space-around;
  font-family: "St_Sign normal";
  font-size: 25px;
}

.button {
  padding: 15px;
  transition: 150ms cubic-bezier(0.47, 0, 0.745, 0.715);
  border: 2px solid #d9d9d9;
}

.button:hover {
  background-color: #d9d9d9;
  border-color: #cccccc;
}

.purchases {
  border-width: 2px 0px 2px 2px;
  border-radius: 12px 0px 0px 12px;
}

.nickname {
  border-width: 2px 2px 2px 0px;
  border-radius: 0px 12px 12px 0px;
}

.registration {
  color: white;
  background: #760000;
  border-radius: 0px 12px 12px 0px;
  padding: 15px 20px;
}

.registration:hover {
  background-color: #610000;
}

.active {
  color: white;
  background: #1e2859;
  border: 2px solid #111d5b;
}

.active:hover {
  background-color: #111d5b;
  border-color: #0d1647;
}

@media (max-width: 768px) {
  .container {
    margin-top: 1vw;
  }
  .button {
    padding: 2.5vw;
    font-size: 4vw;
  }
  .registration {
    padding: 2.5vw;
    font-size: 4vw;
  }
}
</style>
