<script setup>
import GamesListHeader from "./GamesListHeader.vue";
import GameCard from "./GameCard.vue";
import { useGamesStore } from "../../stores/games";
import { ref } from "vue";

const gamesStore = useGamesStore();

const filterType = ref("");

const changeGames = (data) => {
  filterType.value = data;
};
</script>

<template>
  <div class="container">
    <GamesListHeader @filter="changeGames" />
    <div class="cards_container">
      <GameCard
        v-if="filterType == 'all'"
        v-for="game in gamesStore.allGames"
        :key="game.id"
        :id="game.id"
        :title="game.title"
        :description="game.description"
        :imageLink="game.image"
        :tags="game.tags"
        :price="game.price"
      />
      <GameCard
        v-else
        v-for="game in gamesStore.userGames"
        :id="game.id"
        :title="game.title"
        :description="game.description"
        :imageLink="game.image"
        :tags="game.tags"
        :price="game.price"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 60px;
  background-color: #f8f8f8;
  width: 95%;
  border-radius: 35px;
  justify-content: center;
}

@media (max-width: 1000px) {
  .container {
    width: 100%;
  }
  .cards_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 650px) {
  .cards_container {
    grid-template-columns: 1fr;
  }
  .container {
    margin-top: 20px;
    padding-bottom: 40px;
  }
}
</style>
