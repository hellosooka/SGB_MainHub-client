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
  background: #2c2c2c;
  align-items: center;
  justify-content: space-around;
  font-family: "St_Sign normal";
  font-size: 25px;
}

.button {
  padding: 15px;
  transition: 150ms cubic-bezier(0.47, 0, 0.745, 0.715);
  border: 2px solid #1c1c1c;
  color: white;
}

.button:hover {
  background-color: #1c1c1c;
  border-color: #cccccc;
}

.purchases {
}

.nickname {
}

.registration {
  color: white;
  background: #a83142;
  padding: 15px 20px;

  border: 2px solid #a83142;
}

.registration:hover {
  background-color: #760000;
  border-radius: 2px solid #e13b37;
}

.active {
  color: white;
  background: #f6c453;
  border: 2px solid #d0a646;
}

.active:hover {
  background-color: #d0a646;
  border-color: #f6c453;
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
