<script setup>
import GamesListHeader from "./GamesListHeader.vue";
</script>

<template>
  <div class="container">
    <GamesListHeader />
  </div>
</template>

<style scoped>
.container {
  margin-top: 60px;
  background-color: #f8f8f8;
  width: 95%;
  min-height: 300px;
  border-radius: 35px;
}

@media (max-width: 650px) {
  .container {
    margin-top: 20px;
  }
}
</style>
