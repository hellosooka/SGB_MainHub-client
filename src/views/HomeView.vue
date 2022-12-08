<script setup>
import ReadyToGame from "../components/ReadyToGame/ReadyToGame.vue";
import GamesList from "../components/GamesList/GamesList.vue";
import RecentPosts from "../components/RecentPosts/RecentPosts.vue";
</script>

<template>
  <div class="container">
    <RecentPosts />

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
