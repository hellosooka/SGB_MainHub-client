<script setup>
const props = defineProps({
  type: "buy" | "play",
});
</script>

<template>
  <button
    :class="{ buy: type == 'buy', add: type == 'add', play: type == 'play' }"
    class="container"
  >
    <slot />
  </button>
</template>

<style scoped>
.container {
  font-family: "St_Sign normal";
  font-size: 36px;
  border: none;
  padding: 10px 21px;

  border: 3px solid black;

  margin: 8px;
  box-shadow: 5px 5px black;

  transition: 250ms;
}

.container:active {
  box-shadow: 0px 0px black;
  transform: translate(5px, 5px);
}

.buy {
  color: white;
  background-color: #622841;
}

.buy:hover {
  background-color: #d0a646;
}

.play {
  color: white;
  background-color: #a83142;
}

.play:hover {
  background-color: #8d2837;
}

@media (max-width: 1000px) {
  .container {
    font-size: 5vw;
    padding: 2vw 5vw;
    margin: 2px;
  }
}
</style>
