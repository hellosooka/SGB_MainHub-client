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
      <GameButton color="red" link="/purchases" v-upper-case>
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
  padding: 0px 20px;

  transition: 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
}

.container:hover {
  padding: 0px 15px;
}

.title {
  text-align: center;
  padding: 70px 0px;
  display: block;
  width: 100%;
  font-family: "SHEPEL";
  border: none;
  border-radius: 20px 20px 0px 0px;
  font-size: 5vw;
  color: white;
  background-color: black;
  width: 100%;
}

.game-button_container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
@media (max-width: 850px) {
  .title {
    text-align: center;
    font-size: 7vw;
    padding: 40px 0px;
  }
}
</style>
