<script setup>
import { usePostsStore } from "../stores/posts";
import BlogPostCard from "../components/BlogPostCard.vue";

const postsStore = usePostsStore();
</script>

<template>
  <div class="blog_background">
    <div class="blog_container">
      <span class="blog_title" v-upper-case> БЛОГ </span>
      <BlogPostCard
        v-for="post in postsStore.posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :content="post.content"
        :imageLink="`${postsStore.HOST}/${post.image}`"
      />
    </div>
  </div>
</template>
<style scoped>
.blog_background {
  background-color: #141414;
}

.blog_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  border: none;
  border-radius: 20px 20px 0px 0px;

  background: linear-gradient(
      to right,
      transparent 48%,
      #555 49%,
      #555 50%,
      transparent 51%
    ),
    linear-gradient(
      to bottom,
      transparent 48%,
      #555 49%,
      #555 50%,
      transparent 51%
    );
  background-size: 50px 50px;
}

.blog_title {
  font-size: 7vw;
  font-family: "SHEPEL";
  color: white;
  text-align: center;
  margin-top: 40px;
}
</style>
