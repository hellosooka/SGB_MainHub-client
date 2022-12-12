import { ref } from "vue";
import { defineStore } from "pinia";

export const useGamesStore = defineStore("games", () => {
  const allGames = ref([
    {
      id: 1,
      title: "GameOne",
      description: "some description",
      image: " https://rgrfacilities.co.uk/gallery/blog/8278044.jpg ",
      price: 100,
      link: "some link",
      createdAt: "2022-12-12T10:31:15.285Z",
      updatedAt: "2022-12-12T10:31:15.285Z",
      tags: [
        {
          id: 4,
          title: "test",
          createdAt: "2022-12-12T10:34:55.679Z",
          updatedAt: "2022-12-12T10:34:55.679Z",
          GameTags: {
            id: 1,
            gameId: 1,
            tagId: 4,
          },
        },
        {
          id: 1,
          title: "free",
          createdAt: "2022-12-12T10:34:37.673Z",
          updatedAt: "2022-12-12T10:34:37.673Z",
          GameTags: {
            id: 2,
            gameId: 1,
            tagId: 1,
          },
        },
      ],
    },
    {
      id: 2,
      title: "GameTwo",
      description: "some description",
      image: " https://rgrfacilities.co.uk/gallery/blog/8278044.jpg ",
      price: 200,
      link: "some link",
      createdAt: "2022-12-12T10:31:29.607Z",
      updatedAt: "2022-12-12T10:31:29.607Z",
      tags: [
        {
          id: 3,
          title: "mind",
          createdAt: "2022-12-12T10:34:49.658Z",
          updatedAt: "2022-12-12T10:34:49.658Z",
          GameTags: {
            id: 3,
            gameId: 2,
            tagId: 3,
          },
        },
        {
          id: 2,
          title: "16+",
          createdAt: "2022-12-12T10:34:43.925Z",
          updatedAt: "2022-12-12T10:34:43.925Z",
          GameTags: {
            id: 4,
            gameId: 2,
            tagId: 2,
          },
        },
      ],
    },
    {
      id: 3,
      title: "GameThree",
      description: "some description",
      image: " https://rgrfacilities.co.uk/gallery/blog/8278044.jpg ",
      price: 300,
      link: "some link",
      createdAt: "2022-12-12T10:31:36.049Z",
      updatedAt: "2022-12-12T10:31:36.049Z",
      tags: [],
    },
  ]);

  const userGames = ref([
    {
      id: 2,
      title: "GameTwo",
      description: "some description",
      image: " https://rgrfacilities.co.uk/gallery/blog/8278044.jpg ",
      price: 200,
      link: "some link",
      createdAt: "2022-12-12T10:31:29.607Z",
      updatedAt: "2022-12-12T10:31:29.607Z",
      tags: [
        {
          id: 3,
          title: "mind",
          createdAt: "2022-12-12T10:34:49.658Z",
          updatedAt: "2022-12-12T10:34:49.658Z",
          GameTags: {
            id: 3,
            gameId: 2,
            tagId: 3,
          },
        },
        {
          id: 2,
          title: "16+",
          createdAt: "2022-12-12T10:34:43.925Z",
          updatedAt: "2022-12-12T10:34:43.925Z",
          GameTags: {
            id: 4,
            gameId: 2,
            tagId: 2,
          },
        },
      ],
    },
    {
      id: 3,
      title: "GameThree",
      description: "some description",
      image: " https://rgrfacilities.co.uk/gallery/blog/8278044.jpg ",
      price: 300,
      link: "some link",
      createdAt: "2022-12-12T10:31:36.049Z",
      updatedAt: "2022-12-12T10:31:36.049Z",
      tags: [],
    },
  ]);

  function getGameById(id) {
    return allGames.value.filter((game) => game.id === id);
  }

  function getUserGameById(id) {
    return userGames.value.filter((game) => game.id === id);
  }

  return { allGames, userGames, getGameById, getUserGameById };
});
