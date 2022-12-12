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
  flex-direction: row;
  padding: 30px;
  margin: 20px;
  border: 2px solid #ebebeb;
  border-radius: 20px;
  background-color: white;
}
.image {
  width: 40vw;
  height: 22.5vw;
  border: 2px solid #ebebeb;

  border-radius: 20px;
}
.content_container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px 0px 10px 30px;
}

.data_container {
  display: flex;
  flex-direction: column;
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
}
.link {
  font-size: 1.2vw;
  font-family: "St_sign normal";
  color: #1e2859;
}
.link:hover {
  text-decoration: underline;
}

@media (max-width: 1000px) {
  .container {
    flex-direction: column;
    align-items: center;
    padding: 3vw;
    overflow: hidden;
  }
  .image {
    background-position: center center;
    background-size: cover;
    width: 99%;
    height: 50vw;
    overflow: hidden;
  }
  .content_container {
    padding: 1vw 2vw;
  }
  .title {
    font-size: 6vw;
    width: 100%;
  }
  .description {
    font-size: 2.5vw;
    width: 100%;
  }
  .link {
    padding-top: 1vw;
    font-size: 3vw;
  }
}
</style>
