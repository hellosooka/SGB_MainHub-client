<script setup>
const props = defineProps({
  title: "",
  description: "",
  imageLink: "",
  price: "",
});
</script>

<template>
  <div class="container">
    <img src="https://rgrfacilities.co.uk/gallery/blog/8278044.jpg" alt="" />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.image {
}
</style>
