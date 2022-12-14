<script setup>
import GamesListHeader from "./GamesListHeader.vue";
import GameCard from "./GameCard.vue";
import { useGamesStore } from "../../stores/games";
import { ref, computed } from "vue";

const gamesStore = useGamesStore();

const filterType = ref("");
const changeGames = (data) => {
  filterType.value = data;
};

const searchQuery = ref("");
const searchGame = (data) => {
  searchQuery.value = data;
};

const searchedGame = computed(() => {
  if (filterType.value == "all") {
    return gamesStore.allGames.filter((game) =>
      game.title.includes(searchQuery.value)
    );
  } else {
    return gamesStore.userGames.filter((game) =>
      game.title.includes(searchQuery.value)
    );
  }
});
</script>

<template>
  <div class="game-list_container">
    <GamesListHeader @search="searchGame" @filter="changeGames" />
    <div class="cards_container">
      <GameCard
        v-if="filterType == 'all'"
        v-for="game in searchedGame"
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
        v-for="game in searchedGame"
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
.game-list_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c1c1c;
  width: 98%;
}

.cards_container {
  width: 97%;
  align-items: center;
}
</style>
