<script setup>
import { usePostsStore } from "../../stores/posts.js";
import PostCard from "./PostCard.vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";

const postsStore = usePostsStore();
</script>

<template>
  <div v-if="postsStore.posts.length != 0" class="container">
    <div class="header_container">
      <router-link class="link" to="/blog" v-upper-case>
        все новости
      </router-link>
    </div>
    <div class="carousel_container">
      <Carousel :autoplay="5000" :wrap-around="true">
        <Slide
          class="carousel__item"
          v-for="post in postsStore.posts"
          :key="post.id"
        >
          <PostCard
            class="carousel__item"
            :title="post.title"
            :description="post.description"
            :id="post.id"
            :imageLink="post.bannerImage"
          />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.header_container {
  align-self: flex-end;
  padding: 10px 40px 20px 40px;
}

.carousel_container {
  width: 100%;
}

.link {
  font-family: "St_Sign condensed";
  font-size: 30px;
  color: #1e2859;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 450px) {
  .link {
    font-size: 7vw;
  }
  .header_container {
    padding: 10px 40px 10px 40px;
  }
}
</style>
