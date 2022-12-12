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
  border-radius: 15px;
  padding: 12px 23px;
}

.buy {
  color: white;
  background-color: #aa0000;
}

.buy:hover {
  background-color: #760000;
}

.play {
  color: white;
  background-color: #1e2859;
}
</style>
