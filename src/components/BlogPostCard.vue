<script setup>
import { computed } from "vue";

const props = defineProps({
  id: "",
  imageLink: "",
  title: "",
  description: "",
});

const compactDescription = computed(() => {
  if (props.description.length > 800) {
    return props.description.slice(0, 800) + "...";
  }
  return props.description;
});

const compactTitle = computed(() => {
  if (props.title.length > 60) {
    return props.title.slice(0, 60) + "...";
  }
  return props.title;
});
</script>

<template>
  <div class="container">
    <img class="image" :src="imageLink" alt="" />
    <div class="content_container">
      <div class="data_container">
        <span class="title"> {{ compactTitle }} </span>
        <span class="description"> {{ compactDescription }} </span>
      </div>
      <div class="link_container">
        <router-link class="link" :to="`/blog/${props.id}`">
          Читать полностью
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 20px;
  background-color: white;
  border: 4px solid black;

  transition: 200ms;
}

.container:hover {
  border: 4px solid #434343;
}

.image {
  object-fit: cover;

  width: 100%;
  height: 22.5vw;
}
.content_container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.data_container {
  display: flex;
  flex-direction: column;
  padding: 20px 20px 5px 20px;
}

.title {
  font-family: "St_sign condensed";
  font-size: 2.5vw;
  margin-bottom: 5px;
}

.description {
  font-family: "St_sign normal";
  font-size: 1.4vw;
  color: gray;
  padding: 0px 3px;
}

.link_container {
  display: flex;
  justify-content: flex-end;
  margin: 20px;
}
.link {
  font-size: 1.2vw;
  font-family: "St_sign normal";
  color: #1e2859;
}
.link:hover {
  text-decoration: underline;
}

@media (max-width: 1100px) {
  .title {
    font-size: 4vw;
  }
  .description {
    font-size: 2vw;
  }
  .link {
    font-size: 2vw;
  }
}

@media (max-width: 650px) {
  .title {
    font-size: 5vw;
  }
  .description {
    font-size: 2.5vw;
  }
  .link {
    font-size: 2.5vw;
  }
}

@media (max-width: 450px) {
  .title {
    font-size: 6vw;
  }
  .description {
    font-size: 3vw;
  }
  .link {
    font-size: 3vw;
  }
}
</style>
