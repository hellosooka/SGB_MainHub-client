import { onMounted, ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";
import localforage from "localforage";

export const useGamesStore = defineStore("games", () => {
  const HOST = ref("http://45.80.68.47:7000");

  const allGames = ref([]);
  const userGames = ref([]);

  onMounted(async () => {
    await getAllGames();
  });

  async function getAllGames() {
    try {
      const response = await axios.get(`${HOST.value}/games`, {
        headers: {
          Authorization: `Bearer ${await localforage.getItem("token")}`,
        },
      });

      allGames.value.push(...response.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function getUserGames() { }

  function getGameById(id) {
    return allGames.value.find((game) => game.id == id);
  }

  function getUserGameById(id) {
    return userGames.value.find((game) => game.id == id);
  }

  return { allGames, userGames, getGameById, getUserGameById, HOST };
});
