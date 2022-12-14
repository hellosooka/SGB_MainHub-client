<script setup>
import { computed } from "vue";

const props = defineProps({
  id: "",
  imageLink: "",
  title: "",
  description: "",
});

const compactDescription = computed(() => {
  if (props.description.length > 300) {
    return props.description.slice(0, 300) + "...";
  }
  return props.description;
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
      <img class="image" :src="imageLink" alt="" />
      <div class="text_container">
        <span v-upper-case class="title"> {{ compactTitle }} </span>
        <span class="description"> {{ compactDescription }} </span>
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
}
.container:hover {
  text-decoration: underline;
}
.image {
  width: 100%;
  height: 25vw;
  object-fit: cover;

  transition: 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.text_container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 15px 10px 25px 10px;
  row-gap: 5px;
}

.title {
  color: white;
  text-align: left;
  font-size: 40px;
  font-family: "St_Sign condensed";
}
.description {
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
  .description {
    width: 100%;
    font-size: 3.5vw;
  }
}
</style>
