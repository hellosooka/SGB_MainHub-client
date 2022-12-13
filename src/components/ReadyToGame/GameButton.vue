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
  font-size: 5vw;
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
  border-radius: 0px 0px 20px 0px;
}

.red:hover {
  background-color: #650000;
}

.blue {
  background-color: #1e2859;
  border-radius: 0px 0px 0px 20px;
}

.blue:hover {
  background-color: #111d5b;
}

@media (max-width: 450px) {
  .button {
    font-size: 8vw;
    padding: 20px 20px;
  }
}
</style>
