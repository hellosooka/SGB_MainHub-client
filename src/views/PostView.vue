<script setup>
import { useRoute } from "vue-router";
import { usePostsStore } from "../stores/posts";

const route = useRoute();
const postId = route.params.post;

const postsStore = usePostsStore();
const postData = postsStore.getPostById(postId);
</script>

<template>
  <div class="full-post_container">
    <img class="image" :src="`${postsStore.HOST}/${postData.image}`" alt="" />
    <div class="full-post_content">
      <span class="title"> {{ postData.title }} </span>
      <hr class="line" />
      <span class="content"> {{ postData.content }} </span>
    </div>
  </div>
</template>

<style scoped>
.full-post_container {
  background-color: #141414;
}

.image {
  margin-top: 1.2vw;
  width: 100%;
  height: 30vw;
  object-fit: cover;
}

.full-post_content {
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
}

.title {
  font-family: "St_Sign condensed";
  font-size: 4vw;
  color: white;
}

.line {
  background-color: white;
  width: 100%;
}

.content {
  padding: 10px 25px;
  font-family: "St_sign normal";
  font-size: 2vw;
  color: #8e8e8e;
}

@media (max-width: 700px) {
  .full-post_content {
    padding: 10px 30px;
  }

  .image {
    height: 40vw;
  }

  .title {
    font-size: 5vw;
  }

  .content {
    font-size: 3vw;
  }
}

@media (max-width: 500px) {
  .full-post_content {
    padding: 10px 0px;
  }

  .title {
    font-size: 6vw;
  }

  .content {
    padding: 5px 10px;
    font-size: 4vw;
  }
}
</style>
