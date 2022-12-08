<script setup>
import { usePostsStore } from "../../stores/posts.js";
import PostCard from "./PostCard.vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";

const breakpoints = ref({
  700: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 1.55,
  },
  1150: {
    itemsToShow: 1.7,
  },
  1300: {
    itemsToShow: 1.9,
  },
  1450: {
    itemsToShow: 2.1,
  },
  1600: {
    itemsToShow: 2.4,
  },
  1750: {
    itemsToShow: 2.6,
  },
  1900: {
    itemsToShow: 2.85,
  },
  2050: {
    itemsToShow: 3,
  },
  2200: {
    itemsToShow: 3.2,
  },
  2350: {
    itemsToShow: 3.6,
  },
});
const postsStore = usePostsStore();
</script>

<template>
  <div class="container">
    <div class="header_container">
      <router-link class="link" to="/blog" v-upper-case> все </router-link>
    </div>
    <div class="carousel_container">
      <Carousel :autoplay="5000" :breakpoints="breakpoints" :wrap-around="true">
        <Slide v-for="post in postsStore.posts" :key="post.id">
          <PostCard
            class="carousel__item"
            :title="post.title"
            :description="post.description"
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
  width: 100vw;
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
  .header_container {
    padding: 10px 40px 10px 40px;
  }
}
</style>
