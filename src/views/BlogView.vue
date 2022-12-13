<script setup>
import { usePostsStore } from "../stores/posts";
import BlogPostCard from "../components/BlogPostCard.vue";

const postsStore = usePostsStore();
</script>

<template>
  <span class="blog_title" v-upper-case> БЛОГ </span>
  <div class="blog_container">
    <BlogPostCard
      v-for="post in postsStore.posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :description="post.description"
      :imageLink="post.image"
    />
  </div>
</template>
<style scoped>
.blog_container {
  background-color: #f8f8f8;
  border: none;
  border-radius: 20px 20px 0px 0px;
}

.blog_title {
  font-size: 7vw;
  font-family: "SHEPEL";
  text-align: center;
  margin: 20px 20px;
}
</style>
