<script setup>
import ReadyToGame from "../components/ReadyToGame/ReadyToGame.vue";
import GamesList from "../components/GamesList/GamesList.vue";
</script>

<template>
  <div class="container">
    <ReadyToGame />
    <GamesList />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
