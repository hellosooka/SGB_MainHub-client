<script setup>
import ReadyToGame from "../components/ReadyToGame/ReadyToGame.vue";
import GamesList from "../components/GamesList/GamesList.vue";
import RecentPosts from "../components/RecentPosts/RecentPosts.vue";
</script>

<template>
  <div class="container_background">
    <div class="container">
      <RecentPosts />

      <ReadyToGame />
      <GamesList />
    </div>
  </div>
</template>

<style scoped>
.container_background {
  background-color: #141414;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;

  background: linear-gradient(
      to right,
      transparent 48%,
      #555 49%,
      #555 50%,
      transparent 51%
    ),
    linear-gradient(
      to bottom,
      transparent 48%,
      #555 49%,
      #555 50%,
      transparent 51%
    );
  background-size: 50px 50px;
}
</style>
