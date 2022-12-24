<template>
  <div class="about-us_background">
    <div class="about-us_contaner">
      <span class="title" v-upper-case> О нас </span>
      <div class="content_container"></div>
    </div>
  </div>
</template>

<style scoped>
.about-us_background {
  background-color: #141414;
}

.about-us_contaner {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
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

.title {
  color: white;
  font-family: "SHEPEL";
  font-size: 7vw;
  margin: 2vw 0vw 1vw 0vw;
}
</style>
