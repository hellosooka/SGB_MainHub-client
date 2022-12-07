<script setup>
const props = defineProps({
  link: "",
  color: "red" | "blue",
});
</script>

<template>
  <router-link
    :to="link"
    :class="{ red: color == 'red', blue: color == 'blue' }"
    class="button"
  >
    <slot />
  </router-link>
</template>

<style scoped>
.button {
  font-family: "St_Sign condensed";
  font-size: 80px;
  color: white;

  padding: 30px 40px;
  border-radius: 20px;
  text-align: center;

  transition: 150ms cubic-bezier(0.165, 0.84, 0.44, 1);
}

.button:hover {
  text-decoration: underline;
}

.red {
  background-color: #760000;
}

.red:hover {
  background-color: #650000;
}

.blue {
  background-color: #1e2859;
}

.blue:hover {
  background-color: #111d5b;
}

@media (max-width: 1200px) {
  .button {
    width: 75vw;
  }
}

@media (max-width: 610px) {
  .button {
    font-size: 9vw;
  }
}
</style>
