<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import UserButton from "./UserButton.vue";

const route = useRoute();
const currentRoute = computed(() => route.name);
</script>

<template>
  <div class="header_container">
    <router-link class="main-button_container" to="/">
      <span
        class="main-button_text"
        v-if="currentRoute === 'home'"
        v-upper-case
      >
        SUPERGAMEBOX
      </span>
      <span class="main-button_text" v-else v-upper-case> на ГЛАВНУЮ </span>
    </router-link>
    <div class="second-button_container"><UserButton /></div>
  </div>
</template>

<style scoped>
.header_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 30px;
}
.main-button_text {
  display: block;
  font-family: "SArcade";
  font-size: 70px;
  padding-top: 10px;
}

@media (max-width: 768px) {
  .main-button_text {
    font-size: 9vw;
  }
  .header_container {
    flex-direction: column;
  }
}
</style>
