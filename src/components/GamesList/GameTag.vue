<script setup>
const props = defineProps({
  title: "",
});
</script>

<template>
  <div class="container">{{ title }}</div>
</template>

<style scoped>
.container {
  font-family: "St_sign normal";
  font-size: 18px;
  color: white;
  background-color: #1e2859;
  padding: 8px 15px 6px 15px;
  border: 1px solid #1e2859;
  border-radius: 12px;
}
</style>
