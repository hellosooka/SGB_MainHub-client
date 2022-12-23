<script setup>
import GamesListHeader from "./GamesListHeader.vue";
import GameCard from "./GameCard.vue";
import { useGamesStore } from "../../stores/games";
import { ref, computed } from "vue";
import { useAuthStore } from "../../stores/auth";

const gamesStore = useGamesStore();
const authStore = useAuthStore();

const filterType = ref("");
const changeGames = (data) => {
  filterType.value = data;
};

const searchQuery = ref("");
const searchGame = (data) => {
  searchQuery.value = data;
};

const searchedGame = computed(() => {
  if (filterType.value == "bought") {
    return gamesStore.userGames.filter((game) =>
      game.title.includes(searchQuery.value)
    );
  } else {
    return gamesStore.allGames.filter((game) =>
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
        :imageLink="`${gamesStore.HOST}/${game.image}`"
        :tags="game.tags"
        :price="game.price"
      />
      <GameCard
        v-else
        v-for="game in searchedGame"
        :id="game.id"
        :title="game.title"
        :description="game.description"
        :imageLink="`${gamesStore.HOST}/${game.image}`"
        :tags="game.tags"
        :price="game.price"
      />
    </div>
    <div
      class="ups_container"
      v-if="searchedGame.length == 0 && authStore.isRegistering"
    >
      <span class="ups_message"> Упс! Здесь ни одной игры </span>
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
  padding-bottom: 1vw;
}

.cards_container {
  width: 97%;
  align-items: center;
}

.ups_container {
  padding: 3vw;
}

.ups_message {
  font-family: "St_sign condensed";
  font-size: 3.5vw;
  padding: 1vw;
  background-color: #fcf4df;
  color: #434343;
  border: 4px solid #a83142;
}
</style>
