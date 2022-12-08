<script setup>
import GameButton from "./GameButton.vue";
</script>

<template>
  <div class="container">
    <span class="title" v-upper-case> готов к приключениям? </span>
    <div class="game-button_container">
      <GameButton color="blue" link="/search-room" v-upper-case>
        найти комнтау
      </GameButton>
      <GameButton color="red" link="/search-game" v-upper-case>
        создать комнату
      </GameButton>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6vw;
}
.title {
  font-family: "SHEPEL";
  font-size: 5vw;
}
.game-button_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 3vw;
}
@media (max-width: 850px) {
  .title {
    text-align: center;
    font-size: 7vw;
  }
  .game-button_container {
    flex-direction: column;
  }
}
</style>
