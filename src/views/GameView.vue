<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useGamesStore } from "../stores/games";

const route = useRoute();
const gameId = route.params.gameId;

const gamesStore = useGamesStore();
const gameData = gamesStore.getGameById(gameId);

const isBought = computed(() => {
  const game = gamesStore.getUserGameById(gameId);
  if (game) {
    return true;
  } else {
    return false;
  }
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
</script>

<template>
  <div class="game-view_container">
    <div class="game-description_container">
      <img
        class="game-view_image"
        :src="`${gamesStore.HOST}/${gameData.image}`"
        alt=""
      />
      <div class="game-view_about_container">
        <div class="game-view_title">{{ gameData.title }}</div>
        <hr class="line" />
        <div class="game-view_description">{{ gameData.description }}</div>
      </div>
    </div>
    <div class="game-functions_container">
      <div class="game-functions_tags">
        <div
          :class="{
            'tag_color-yellow': getRandomIntInclusive(1, 3) == 1,
            'tag_color-orange': getRandomIntInclusive(1, 3) == 2,
            'tag_color-red': getRandomIntInclusive(1, 3) == 3,
          }"
          class="game-functions_tag"
          v-for="tag in gameData.tags"
        >
          {{ tag.title }}
        </div>
      </div>
      <button class="game-functions_button">
        <span v-if="isBought"> Играть </span>
        <span v-else>
          <span v-if="gameData.price != 0">
            Купить за {{ gameData.price }}р
          </span>
          <span class="free" v-else> Получить </span>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.game-view_container {
  display: grid;
  grid-template-columns: 3fr 1fr;
  background-color: #141414;
  padding: 15px;
}

.line {
  background-color: white;
  height: 5px;
  width: 99%;
  border: none;
}

.free {
  font-size: 3.7vw;
}

.game-description_container {
  display: flex;
  flex-direction: column;
}

.game-view_image {
  object-fit: cover;

  width: 100%;
  border-radius: 5px;
}

.game-view_about_container {
  display: flex;
  flex-direction: column;
  padding: 1vw;
}

.game-view_title {
  font-family: "St_sign condensed";
  font-size: 8vw;
  color: white;
}

.game-view_description {
  font-family: "St_sign normal";
  color: #ebebeb;
  font-size: 2vw;
  padding: 1vw 1vw 4vw 1vw;
}

.game-functions_container {
}

.game-functions_tags {
  display: flex;
  flex-wrap: wrap;
  padding: 0.5vw;
  margin-top: -10px;
}

.game-functions_tag {
  font-family: "St_sign normal";
  font-size: 2vw;
  color: white;
  padding: 1vw;
  margin: 0.5vw;
  border-radius: 3px;
  background-color: #1e2859;

  transition: 250ms cubic-bezier(0.39, 0.575, 0.565, 1);
}

.game-functions_tag:hover {
  background-color: #171f46;
}

.tag_color-yellow {
  background-color: #f6c453;
}

.tag_color-yellow:hover {
  background-color: #d0a646;
}

.tag_color-orange {
  background-color: #ec643a;
}

.tag_color-orange:hover {
  background-color: #d05833;
}

.tag_color-red {
  background-color: #e13b37;
}

.game-functions_button {
  position: fixed;
  right: 2vw;
  bottom: 2vw;
  font-family: "St_sign normal";
  font-size: 3vw;
  padding: 1vw 2vw;
  box-shadow: 10px 10px black;
  border: 4px solid black;
  background-color: #760000;
  color: white;

  transition: 200ms;
}

.game-functions_button:hover {
  background-color: #8d2837;
}

.game-functions_button:active {
  box-shadow: 0px 0px black;
  transform: translate(10px, 10px);
}

@media (max-width: 820px) {
  .game-view_container {
    grid-template-columns: 1fr;
  }

  .game-view_title {
    padding-top: 1.5vw;
    font-size: 10vw;
  }

  .line {
    height: 2px;
  }

  .game-view_description {
    font-size: 3.5vw;
    margin-bottom: 3vw;
  }

  .game-functions_button {
    box-shadow: 5px 5px black;
    font-size: 6vw;
  }

  .game-functions_tag {
    font-size: 3.5vw;
  }
}

@media (max-width: 450px) {
  .game-view_title {
    font-size: 15vw;
  }

  .game-view_description {
    font-size: 4vw;
  }

  .game-functions_button {
    box-shadow: 5px 5px black;
    font-size: 8vw;
  }

  .game-functions_tag {
    font-size: 4vw;
  }
}
</style>
