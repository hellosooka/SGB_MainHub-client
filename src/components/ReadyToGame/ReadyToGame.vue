<script setup>
import GameButton from "./GameButton.vue";
</script>

<template>
  <div class="container">
    <div class="title_background">
      <div class="title_container">
        <span class="title" v-upper-case> готов к приключениям? </span>
      </div>
    </div>
    <div class="game-button_container">
      <GameButton color="blue" link="/search-room" v-upper-case>
        найти комнтау
      </GameButton>
      <GameButton color="red" link="/purchases" v-upper-case>
        создать комнату
      </GameButton>
    </div>
  </div>
</template>

<style scoped>
.container {
}

.title_background {
  background-color: black;
  border: none;
  width: 100%;
}

.title_container {
  padding: 60px 0px;
  width: 100%;
}

.title {
  display: block;
  text-align: center;
  align-items: center;
  width: 100%;
  font-family: "SHEPEL";
  font-size: 5vw;
  color: white;
}

.game-button_container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
@media (max-width: 850px) {
  .title_container {
    padding: 30px 0px;
  }
  .title {
    text-align: center;
    font-size: 7vw;
  }
}
</style>
