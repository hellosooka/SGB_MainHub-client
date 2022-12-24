<script setup>
import GameTag from "./GameTag.vue";
import GameButton from "./GameButton.vue";
import { useGamesStore } from "../../stores/games";
import { computed } from "vue";
const props = defineProps({
  id: String,
  title: String,
  description: String,
  imageLink: String,
  price: String,
  tags: [String],
});

const gamesStore = useGamesStore();

const isBought = computed(() => {
  const game = gamesStore.getUserGameById(props.id);
  if (game) {
    return true;
  } else {
    return false;
  }
});
</script>

<template>
  <div class="card_container">
    <img class="image" :src="imageLink" alt="" />
    <div class="content_container">
      <div class="game-card-content_container">
        <span class="title"> {{ title }} </span>
        <div class="tag_container">
          <GameTag v-for="tag in tags" :key="tag.id" :title="tag.title" />
        </div>
        <span class="description"> {{ description }} </span>
      </div>
      <div class="footer_container">
        <span v-if="!isBought" class="price">
          <span v-if="price != 0"> {{ price }}р </span>
          <span v-else v-upper-case class="free"> free </span>
        </span>
        <GameButton v-if="isBought" type="play"> Играть </GameButton>
        <GameButton v-else type="buy">
          <router-link :to="`/games/${id}`"> Купить </router-link>
        </GameButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card_container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 20px;
  background-color: #2c2c2c;
  border: 4px solid black;

  transition: 100ms;
}

.card_container:hover {
  border: 4px solid #434343;
}

.image {
  object-fit: cover;

  width: 40vw;
  height: 22.5vw;
  border-width: 0px 4px 0px 0px;
  border-style: solid black;
}

.content_container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5px;
  padding-left: 20px;
}

.game-card-content_container {
  padding: 10px 5px 0px 5px;
}

.tag_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
  margin: 5px 0px 8px 5px;
}

.title {
  font-family: "St_sign condensed";
  font-size: 5vw;
  color: white;
}

.description {
  font-family: "St_sign normal";
  font-size: 20px;
  color: #8e8e8e;
  margin-left: 8px;
}

.footer_container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.price {
  color: gray;
  font-family: "St_Sign condensed";
  font-size: 25px;
  margin: 15px;

  transition: 500ms cubic-bezier(0.23, 1, 0.32, 1);
}

@media (max-width: 1000px) {
  .image {
    width: 100%;
    height: 50vw;
  }

  .title {
    font-size: 8vw;
  }

  .description {
    font-size: 2.5vw;
    margin-left: 2px;
  }

  .card_container {
    padding: 15px;
    margin: 5px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1.5fr;
    row-gap: 10px;
  }
}

.free {
  color: #f6c453;
}

@media (max-width: 650px) {
  .card_container {
    width: 100%;
    grid-template-rows: 1fr 1fr;
    row-gap: 0.5vw;
    margin: 5px 0px;
  }

  .image {
    width: 100%;
    height: 48.38vw;
    border: 4px solid black;
  }

  .title {
    font-size: 8vw;
  }

  .description {
    font-size: 4vw;
  }

  .content_container {
    padding-left: 15px;
  }

  .tag_container {
    margin: 5px 0px 3px 0px;
    column-gap: 5px;
  }

  .price {
    font-size: 4vw;
    margin: 1.5vw;
  }
}

@media (max-width: 500px) {
  .game-card-content_container {
    padding: 5px 0px;
  }

  .content_container {
    padding-left: 5px;
  }
}
</style>
