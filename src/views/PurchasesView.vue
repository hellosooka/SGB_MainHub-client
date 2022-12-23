<script setup>
import GamesList from "../components/GamesList/GamesList.vue";
</script>

<template>
  <div class="background">
    <div class="container">
      <br />
      <GamesList />
    </div>
  </div>
</template>

<style scoped>
.background {
  background-color: #141414;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5vw;

  border: none;
  border-radius: 20px 20px 0px 0px;

  background: linear-gradient(
      to right,
      transparent 48%,
      #555 49%,
      #555 50%,
      transparent 51%
    ),
    linear-gradient(
      to bottom,
      transparent 48%,
      #555 49%,
      #555 50%,
      transparent 51%
    );
  background-size: 50px 50px;
}
</style>
