<script setup>
import { computed } from "vue";

const props = defineProps({
  id: "",
  imageLink: "",
  title: "",
  description: "",
});

const compactDescription = computed(() => {
  if (props.description.length > 100) {
    return props.description.slice(0, 100) + "...";
  }
  return props.description;
});

const compactTitle = computed(() => {
  if (props.title.length > 32) {
    return props.title.slice(0, 32) + "...";
  }
  return props.title;
});
</script>

<template>
  <router-link :to="`/blog/${props.id}`">
    <div class="container">
      <img class="image" :src="imageLink" alt="" />
      <span v-upper-case class="title"> {{ compactTitle }} </span>
      <span class="description"> {{ compactDescription }} </span>
    </div>
  </router-link>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 0px 50px;
}
.container:hover {
  text-decoration: underline;
}
.image {
  border-radius: 20px;
  width: 97vw;
  height: 25vw;
  object-fit: cover;

  transition: 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.image:hover {
  padding: 5px;
  border-radius: 25px;
}
.title {
  color: #1e2859;
  text-align: left;
  padding: 11px 12px 1px 12px;
  font-size: 40px;
  font-family: "St_Sign condensed";
}
.description {
  width: 640px;
  padding: 0px 13px 0px 13px;
  color: gray;
  text-align: left;
  font-size: 25px;
  font-family: "St_Sign normal";
}

@media (max-width: 1145px) {
  .image {
    height: 28vw;
  }
  .title {
    width: 56vw;
    font-size: 4vw;
  }
  .description {
    width: 56vw;
    font-size: 2.5vw;
  }
}
@media (max-width: 700px) {
  .image {
    width: 80vw;
    height: 45vw;
  }
  .title {
    width: 80vw;
    font-size: 6vw;
  }
  .description {
    width: 100%;
  }
}
</style>
