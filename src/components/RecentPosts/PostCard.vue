<script setup>
import { computed } from "vue";
import { usePostsStore } from "../../stores/posts";

const props = defineProps({
  id: "",
  imageLink: "",
  title: "",
  content: "",
});

const postsStore = usePostsStore();

const compactContent = computed(() => {
  if (props.content.length > 300) {
    return props.content.slice(0, 300) + "...";
  }
  return props.content;
});

const compactTitle = computed(() => {
  if (props.title.length > 70) {
    return props.title.slice(0, 70) + "...";
  }
  return props.title;
});
</script>

<template>
  <router-link :to="`/blog/${props.id}`">
    <div class="container">
      <img class="image" :src="`${postsStore.HOST}/${imageLink}`" alt="" />
      <div class="text_container">
        <span v-upper-case class="title"> {{ compactTitle }} </span>
        <span class="content"> {{ compactContent }} </span>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 0px 50px;
  background-color: #1c1c1c;
  border: 3px solid #2c2c2c;
  height: 100%;

  transition: 200ms;
}

.container:hover {
  border: 4px solid #434343;
}

.image {
  width: 95vw;
  height: 25vw;
  object-fit: cover;

  transition: 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.text_container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 15px 20px 25px 20px;
  row-gap: 5px;
}

.title {
  color: white;
  text-align: left;
  font-size: 40px;
  font-family: "St_Sign condensed";
}

.content {
  color: gray;
  text-align: left;
  font-size: 25px;
  font-family: "St_Sign normal";
}

@media (max-width: 700px) {
  .image {
    height: 45vw;
  }

  .title {
    width: 80vw;
    font-size: 6vw;
  }

  .content {
    width: 100%;
    font-size: 3.5vw;
  }
}
</style>
