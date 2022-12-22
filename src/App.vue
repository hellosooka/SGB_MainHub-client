<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import Header from "./components/Header/Header.vue";
import { useAuthStore } from "./stores/auth";

const authStore = useAuthStore();

onMounted(() => {
  authStore.loadUser();
});
</script>

<template>
  <div class="wrapper">
    <Header class="" />
    <RouterView class="content" />
    <Footer class="footer" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.content {
  flex: 1 0 auto;
}

.footer {
  flex: 0 0 auto;
}
</style>
