<script setup>
import GameTag from "./GameTag.vue";
import GameButton from "./GameButton.vue";
import { useGamesStore } from "../../stores/games";
import { computed } from "vue";
const props = defineProps({
  id: "",
  title: "",
  description: "",
  imageLink: "",
  price: "",
  tags: [],
});

const gamesStore = useGamesStore();

const isBought = computed(() => {
  const game = gamesStore.getUserGameById(props.id);
  if (game.length == 0) {
    return false;
  } else {
    return true;
  }
});
</script>

<template>
  <div class="card_container">
    <img class="image" :src="imageLink" alt="" />
    <div class="content_container">
      <div>
        <span class="title"> {{ title }} </span>
        <div class="tag_container">
          <GameTag v-for="tag in tags" :title="tag.title" />
        </div>
        <span class="description"> {{ description }} </span>
      </div>
      <div class="footer_container">
        <span v-if="!isBought" class="price"> {{ price }}р </span>
        <GameButton v-if="isBought" type="play"> Играть </GameButton>
        <GameButton v-else type="buy"> Купить </GameButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card_container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 20px;
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  border: 2px solid #ebebeb;
}
.image {
  border-radius: 20px;
}

.content_container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5px;
  padding-left: 20px;
}

.tag_container {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin: 5px 0px 8px 5px;
}

.title {
  font-family: "St_sign condensed";
  font-size: 60px;
}

.description {
  font-family: "St_sign normal";
  font-size: 20px;
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
}
</style>
