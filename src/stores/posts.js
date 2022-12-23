import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const usePostsStore = defineStore("posts", () => {
  const posts = ref([]);

  onMounted(async () => {
    await getPosts();
  });

  const HOST = ref("http://45.80.68.47:7000");
  const isError = ref(false);
  const errorMessage = ref("");

  async function getPosts() {
    try {
      const response = await axios.get(`${HOST.value}/posts`);
      posts.value.push(...response.data);
    } catch (e) {
      showError(e);
    }
  }

  function showError(e) {
    isError.value = true;
    errorMessage.value = e.response.data.message;
    if (errorMessage.value == "") {
      errorMessage.value = "Server error";
    }
  }

  function getPostById(id) {
    return posts.value.find((post) => post.id == id);
  }

  return { posts, getPostById, HOST };
});
